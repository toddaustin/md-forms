// validation event listeners

var myForm = document.getElementById("signup");

myForm.addEventListener('input', function(event) {
    // stop the event from its default action: submitting the form (for our validation, submission is not desired)
    var fName = document.querySelector('input[name=first-name]');
    var lName = document.querySelector('input[name=last-name]');
    var eMail = document.querySelector('input[name=email]');
    var fVal = fName.value;
    var lVal = lName.value;
    var emailVal = eMail.value;

    if (!validator.isTrimmed(fVal) || validator.isEmpty(fVal)) {
        fName.setCustomValidity("Please double check your entry, it is either empty or has too many spaces");
    } else {
        console.log('ok')
        fName.setCustomValidity("");
    }
    if (!validator.isTrimmed(lVal) || validator.isEmpty(lVal)) {
        lName.setCustomValidity("Please double check your entry, it is either empty or has too many spaces");
    } else {
        lName.setCustomValidity("");
    }

    if (!validator.isTrimmed(emailVal) || validator.isEmpty(emailVal) || !validator.isEmailAddress(emailVal)) {
        eMail.setCustomValidity("Please double check your entry, it is not a valid credit card number");
    } else {
        eMail.setCustomValidity("");
    }

    
    event.preventDefault();
});