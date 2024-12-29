let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections =  document.querySelector('section');
let navlinks =  document.querySelector('header navbar');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute;

        if(top >= offset && top< offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [herf"#" + id +  ]').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

const video = document.getElementById('webcam');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
let mediaStream = null;

async function startWebcam() {
    try {
        mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = mediaStream;
    } catch (error) {
        console.error("Error accessing the webcam: ", error);
    }
}

function stopWebcam() {
    if (mediaStream) {
        const tracks = mediaStream.getTracks();
        tracks.forEach(track => track.stop());
        video.srcObject = null;
    }
}

startButton.addEventListener('click', startWebcam);
stopButton.addEventListener('click', stopWebcam);