import '../scss/base.scss';

//floating label animation for radio btns
let checkDiv = document.getElementById("custom-float1");
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
        // floatingLabel.classList.remove("float-custom-label");
        floatingLabel.classList.add("unfloat-custom-label");
    }    
  }, false);