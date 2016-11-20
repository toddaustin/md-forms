// validation event listeners

var myForm = document.getElementById("scheduling");

myForm.addEventListener('input', function(event) {
    // stop the event from its default action: submitting the form (for our validation, submission is not desired)
    var sDate = document.querySelector('input[name=date]');
    var sTime = document.querySelector('input[name=time]');
    var sPhone = document.querySelector('input[name=contact]');
    var sMail= document.querySelector('input[name=email]');

    var dVal = sDate.value;
    var tVal = sTime.value;
    var pVal = sPhone.value;
    var mVal = sMail.value;

    if (!validator.isTrimmed(dVal) || validator.isEmpty(dVal) || !validator.isDate(dVal)) {
        sDate.setCustomValidity("Please double check your entry, it is either empty or has too many spaces");
    } else {
        sDate.setCustomValidity("");
    }
    if (!validator.isTrimmed(tVal) || validator.isEmpty(tVal)) {
        sTime.setCustomValidity("Please double check your entry, it is either empty or has too many spaces");
    } else {
        sTime.setCustomValidity("");
    }
    if (!validator.isTrimmed(pVal) || validator.isEmpty(pVal) || !validator.isPhoneNumber(pVal)) {
        sPhone.setCustomValidity("Please double check your entry, it is either empty or not a valid phone number");
    } else {
        sPhone.setCustomValidity("");
    }
    if (!validator.isTrimmed(mVal) || validator.isEmpty(mVal) || !validator.isEmailAddress(mVal)) {
        sMail.setCustomValidity("Please double check your entry, it is either empty, has too many spaces or is not a valid email address");
    } else {
        sMail.setCustomValidity("");
    }


    event.preventDefault();
});