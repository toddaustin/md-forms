
var myForm = document.getElementById("signup");
var fName = document.querySelector('input[name=first-name]');
var lName = document.querySelector('input[name=last-name]');
var eMail = document.querySelector('input[name=email]');
var fName = document.querySelector('input[name=first-name]');
var lName = document.querySelector('input[name=last-name]');
var eMail = document.querySelector('input[name=email]');
var pWord = document.getElementById('password');

myForm.addEventListener('submit',isValid);
myForm.addEventListener('input', isValid);
  
function isValid(){
    if (validator.isEmpty(fName.value)) {
        fName.setCustomValidity("Please double check your entry, it is either empty");
    } else {
        fName.setCustomValidity("");
    }
    if (validator.isEmpty(lName.value)) {
        lName.setCustomValidity("Please double check your entry, it is either empty");
    } else {
        lName.setCustomValidity("");
    }

    if (validator.isEmpty(eMail.value) || !validator.isEmailAddress(eMail.value)) {
        eMail.setCustomValidity("Please double check your entry, it is not a email or it is empty");
    } else {
        eMail.setCustomValidity("");
    }

    if (validator.isEmpty(pWord.value)) {
        pWord.setCustomValidity("Please double check your entry, it cannot be empty");
    } else {
        pWord.setCustomValidity("");
    }

    event.preventDefault();
}





