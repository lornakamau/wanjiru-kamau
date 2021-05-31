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

//auto position images in projects section
const revealer = new Revealer();

//floating label animation for radio btns in contact
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

    var navLinks = document.getElementsByClassName("nav-link");
    var homePage = document.getElementsByClassName("landing");    
    // change nav link colors on scroll
    if (homePage[0]){
        if (scrollTop > window.innerHeight * 0.9 && scrollTop < window.innerHeight * 1.9 ){
            for (const link of navLinks){
                link.style.color = "#fff";
            }
        } else {
            for (const link of navLinks){
                link.style.color = "#000";
            }
        }
    }
}
document.body.onscroll = getScroll;

//add images to project section
var projectDiv = document.getElementById("projects");
if (projectDiv) {
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
}

//animate on hover for project cards
const projects = document.querySelectorAll('.project-card');
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

//animate fade in of process cards
const processes = document.querySelectorAll('.process-card');
processes.forEach(process =>{
    let processTl = gsap.timeline({paused: false, scrollTrigger:{
        trigger: process.querySelector('.process-icon'),
        start: 'top 85%',
        end: 'top 40%',
        // markers: true,
        scrub: true,
        toggleActions: "play none none reverse"
    } });
    processTl.fromTo(process.querySelector('.process-icon'), {autoAlpha: 0, y: 20}, {
        autoAlpha: 1,
        duration: 2,
        y: 0,
        color: "#BF0603",
        ease: 'Expo.easeOut',
    }, 0.4).fromTo(process.querySelector('.process-title'), {autoAlpha: 0, y: 20}, {
        autoAlpha: 1,
        duration: 2,
        y: 0,
        ease: 'Expo.easeOut',
    }, 0.8).fromTo(process.querySelector('p'), {autoAlpha: 0, y: 30}, {
        autoAlpha: 1,
        duration: 2,
        y: 0,
        ease: 'Expo.easeOut',
    }, 1.2)
}) 

//add class active to nav links
jQuery(function($) {
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $('.navbar-nav .nav-link').each(function() {
     if (this.href === path) {
      $(this).addClass('active');
     }
    });
   });

//animate visibility of home navigation
var homePage = document.getElementsByClassName("landing");
if (!homePage[0]){
    gsap.to('.d-others', {opacity: 1})
} else {
    revealer.createTimeline();
    //landing page animation to position the rest of content 
    gsap.to(".main-content", {
        position: 'relative',
        zIndex: '200',
        scrollTrigger:{
            trigger: ".main-content",
            start: "top bottom-=15%",
            // markers: true,
        }
    })
}

//about page animations
var aboutPage = document.getElementById("about");
if(aboutPage){
    var aboutAvatar = document.getElementById('about-avatar');
    aboutAvatar.src = image1;
    gsap.to(aboutAvatar, {
        // duration: 0.1, 
        // ease:'Expo.easeOut',
        scrollTrigger: {
            trigger: aboutAvatar,
            start: "top top",
            pin: true,
            // markers: true,
            endTrigger: ".about-right",
            end: "bottom 80%",
            toggleActions: "play none none reverse"
        }
    })
    var aboutBottom = document.getElementsByClassName('about-bottom')[0];
    gsap.to('.interests-heading', {
        scrollTrigger: {
            trigger: aboutBottom,
            top: 'top 5%',
            pin: '.interests-heading',
            endTrigger: aboutBottom.querySelector('.about-bottom'),
            end: 'bottom 80%',
            // markers: true,
            pinSpacing: false
        }
    })
    gsap.to('.interests-counter', {
        // duration: 1000,
        scrollTrigger: {
            trigger: aboutBottom,
            top: 'top 5%',
            pin: '.interests-counter',
            endTrigger: aboutBottom.querySelector('.interest-dec:last-child'),
            end: 'bottom 80%',
            // markers: true,
            pinSpacing: false
        }
    })
    gsap.to('.interests-desc-container', {
        // duration: 1000,
        scrollTrigger: {
            trigger: aboutBottom,
            top: 'top 5%',
            pin: '.interests-desc-container',
            endTrigger: aboutBottom.querySelector('.interest-dec:last-child'),
            end: 'bottom 80%',
            // markers: true,
            pinSpacing: false
        }
    })
    // gsap.to('.overflow-y-hidden', {
    //     // duration: 1000,
    //     scrollTrigger: {
    //         trigger: aboutBottom,
    //         top: 'top 5%',
    //         pin: '.overflow-y-hidden',
    //         endTrigger: aboutBottom.querySelector('.interest-dec:last-child'),
    //         end: 'bottom 80%',
    //         // markers: true,
    //         pinSpacing: false
    //     }
    // })
    //instantiate all other interests as invisible apart from the first one
    gsap.to('.interest2', {autoAlpha: 0, duration: 0, opacity: 0, scrollTrigger:{trigger: aboutBottom, start: 'top top'}});
    gsap.to('.interest3', {autoAlpha: 0, duration: 0, opacity: 0, scrollTrigger:{trigger: aboutBottom, start: 'top top'}})
    gsap.to('.interest4', {autoAlpha: 0, duration: 0, opacity: 0, scrollTrigger:{trigger: aboutBottom, start: 'top top'}})
    gsap.to('.interest5', {autoAlpha: 0, duration: 0, opacity: 0, scrollTrigger:{trigger: aboutBottom, start: 'top top'}})
    let interestsTl = gsap.timeline({paused: false , scrollTrigger:{
        trigger: '.interests-container',
        start: 'top 30%',
        endTrigger: aboutBottom.querySelector('.interest-dec:last-child'),
        end: 'bottom 50%',
        // markers: true,
        scrub: true,
        toggleActions: "play none none reverse"
    } });
    //animate other interests section
    interestsTl
    //first interest
    .to('.interests-counter',{
        innerHTML: '01/05',
        duration: 0,
        ease: 'none',
    }, 0)
    .to('.interestNav1', {
        color: "#bf0603",
        duration: 0.1, 
        ease:'Expo.easeOut'
    }, 0)
    .fromTo('.interest1', {autoAlpha: 1}, {
        autoAlpha: 0,
        duration: 0.1, 
        ease:'Expo.easeOut'
    }, 0.1)
    .to('.interestNav1', {
        color: "#000",
        duration: 0.1, 
        ease:'Expo.easeOut'
    }, 0.1)

    //second interest
    .to('.interests-counter',{
        innerHTML: '02/05',
        duration: 0,
        ease: 'none',
    }, 0.1)
    .to('.interestNav2', {
        color: "#bf0603",
        duration: 0.1, 
        ease:'Expo.easeOut'
    }, 0.1)
    .fromTo('.interest2', {autoAlpha: 0}, {
        autoAlpha: 1,
        duration: 0.1, 
        ease:'Expo.easeOut'
    },0.1)
    .fromTo('.interest2', {autoAlpha: 1}, {
        autoAlpha: 0,
        duration: 0.1, 
        ease:'Expo.easeOut'
    },0.2)
    .to('.interestNav2', {
        color: "#000",
        duration: 0.1, 
        ease:'Expo.easeOut'
    }, 0.2)


    //third interest
    .to('.interests-counter',{
        innerHTML: '03/05',
        duration: 0,
        ease: 'none',
    }, 0.2)
    .to('.interestNav3', {
        color: "#bf0603",
        duration: 0.1, 
        ease:'Expo.easeOut'
    }, 0.2)
    .fromTo('.interest3', {autoAlpha: 0}, {
        autoAlpha: 1,
        duration: 0.1, 
        ease:'Expo.easeOut'
    }, 0.2)
    .fromTo('.interest3', {autoAlpha: 1}, {
        autoAlpha: 0,
        duration: 0.1, 
        ease:'Expo.easeOut'
    },0.3)
    .to('.interestNav3', {
        color: "#000",
        duration: 0.1, 
        ease:'Expo.easeOut'
    }, 0.3)


    //fourth interest
    .to('.interests-counter',{
        innerHTML: '04/05',
        duration: 0,
        ease: 'none',
    }, 0.3)
    .to('.interestNav4', {
        color: "#bf0603",
        duration: 0.1, 
        ease:'Expo.easeOut'
    }, 0.3)
    .fromTo('.interest4', {autoAlpha: 0}, {
        autoAlpha: 1,
        duration: 0.1, 
        ease:'Expo.easeOut'
    }, 0.3)
    .fromTo('.interest4', {autoAlpha: 1}, {
        autoAlpha: 0,
        duration: 0.1, 
        ease:'Expo.easeOut'
    },0.4)
    .to('.interestNav4', {
        color: "#000",
        duration: 0.1, 
        ease:'Expo.easeOut'
    }, 0.4)

    
    //fifth interest
    .to('.interests-counter',{
        innerHTML: '05/05',
        duration: 0,
        ease: 'none',
    }, 0.4)
    .to('.interestNav5', {
        color: "#bf0603",
    }, 0.4)
    .fromTo('.interest5', {autoAlpha: 0}, {
        autoAlpha: 1,
    }, 0.4);

    //unset the height of the interests container
    gsap.fromTo('.interests-desc-container', {height: '250vh'}, {
        height: '60vh',
        scrollTrigger: {
            trigger: '.page-end',
            start: 'top 80%',
            end: "bottom bottom",
            toggleActions: "play none none reverse",
            // markers: true
        }
    })
}

