import '../scss/base.scss';

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

//set/unset grayscale for about image
function getScroll(){
    var scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    var aboutImage = document.getElementsByClassName("about-image");
    if (scrollTop >  window.innerWidth * .7 && aboutImage[0]){
        aboutImage[0].style.filter = "grayscale(100%)";
    } else if (scrollTop <  window.innerWidth * .7 && aboutImage[0]) {
        aboutImage[0].style.filter = "grayscale(0%)";
    }}
document.body.onscroll = getScroll;