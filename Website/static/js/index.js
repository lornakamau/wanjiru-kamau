import '../scss/base.scss';
import image1 from '../img/1.jpg';
import image2 from '../img/2.jpg';
import image3 from '../img/3.jpg';
import image4 from '../img/4.jpg';
import image5 from '../img/5.jpg';
import image6 from '../img/6.jpg';
import image7 from '../img/7.jpg';
import image8 from '../img/8.jpg';
import image9 from '../img/9.jpg';
import image10 from '../img/10.jpg';
import Revealer from './revealer';
import { gsap } from 'gsap';
//auto position images
const revealer = new Revealer();
revealer.createTimeline();

//floating label animation for radio btns
let checkDiv = document.getElementById("custom-float1");
if (checkDiv){
    checkDiv.addEventListener("mouseleave", function() {
        let floatingLabel =  document.getElementById("custom-floatingRadioLabel");
        const rbs = document.querySelectorAll('input[name="interests"]');
        let selectedValue;
        for (const rb of rbs) {
            if (rb.checked) {
                selectedValue = rb.value;
            } 
        }
        if (selectedValue){
            floatingLabel.classList.add("float-custom-label");
        } else if(floatingLabel.classList.contains(float-custom-label)){
            floatingLabel.classList.add("unfloat-custom-label");
        }    
      }, false);
}

// set/unset grayscale for about image
function getScroll(){
    var scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    var aboutImage = document.getElementsByClassName("about-image");
    var navBar = document.getElementsByClassName("navbar");
    var navLinks = document.getElementsByClassName("nav-link");
    var homePage = document.getElementsByClassName("landing");
    // if (scrollTop >  window.innerWidth * .8 && aboutImage[0]){
    //     aboutImage[0].style.filter = "grayscale(100%)";
    //     alert("mavi")
    // } else if (scrollTop <  window.innerWidth * .7 && aboutImage[0]) {
    //     aboutImage[0].style.filter = "grayscale(0%)";
    //     alert("jinga")
    // }}
    
    // change nav link colors on scroll
    if (homePage[0]){
        if (scrollTop > window.innerHeight * 0.9 && scrollTop < window.innerHeight * 1.9 ){
            for (const link of navLinks){
                link.style.color = "#fff";
            }
        } else {
            // navBar[0].style.background = "transparent";
            for (const link of navLinks){
                link.style.color = "#000";
            }
        }
    }
}
document.body.onscroll = getScroll;



document.getElementById('image1').src = image1;
document.getElementById('image2').src = image2;
document.getElementById('image3').src = image3;
document.getElementById('image4').src = image4;
document.getElementById('image5').src = image5;
document.getElementById('image6').src = image6;
document.getElementsByClassName('project-image')[0].style.backgroundImage = `url(${image7})`;
document.getElementsByClassName('project-image')[1].style.backgroundImage = `url(${image8})`;
document.getElementsByClassName('project-image')[2].style.backgroundImage = `url(${image9})`;
document.getElementsByClassName('project-image')[3].style.backgroundImage = `url(${image10})`;

//landing page animation
gsap.to(".main-content", {
    position: 'relative',
    zIndex: '200',
    scrollTrigger:{
        trigger: ".main-content",
        start: "top bottom-=15%",
        // markers: true,
    }
})

const projects = document.querySelectorAll('.project-card')

projects.forEach((project)=>{
    const projectTimeline = gsap.timeline({paused: true})
    projectTimeline
    .to(project.querySelector('.project-mask'), {autoAlpha: 0, duration: 0.8})
    .to(project.querySelector('.project-image'), {autoAlpha: 1, duration:0}, 0);
    project.addEventListener('mouseenter', e => {
        projectTimeline.play()
    });
    project.addEventListener('mouseleave', e => {
        projectTimeline.reverse()
    });
})
