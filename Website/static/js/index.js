import '../scss/base.scss';
import image1 from '../img/1.jpg';
import image2 from '../img/2.jpg';
import image3 from '../img/3.jpg';
import image4 from '../img/4.jpg';
import image5 from '../img/5.jpg';
import image6 from '../img/6.jpg';
import Revealer from './revealer';

//auto position images
const revealer = new Revealer();
revealer.reveal();
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
    
    //change nav link colors on scroll
    if (homePage[0]){
        if (scrollTop > window.innerHeight && scrollTop < window.innerHeight * 1.9 ){
            navBar[0].style.background = "#000";
            for (const link of navLinks){
                link.style.color = "#fff";
                const difference = difference;
                link.style.setProperty('--blend-mode', difference);
            }
        } else {
            navBar[0].style.background = "#fff";
            for (const link of navLinks){
                link.style.color = "#000";
                const initial = initial;
                link.style.setProperty('--blend-mode', initial);
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

