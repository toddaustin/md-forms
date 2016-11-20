// validation event listeners

var loginForm = document.getElementById("login");

loginForm.addEventListener('input', function(event) {
    // stop the event from its default action: submitting the form (for our validation, submission is not desired)
    var uName = document.querySelector('input[name=username]');
    var pass = document.querySelector('input[name=password]');


    var uVal = uName.value;
    var pVal = pass.value;
    

    if (!validator.isTrimmed(uVal) || validator.isEmpty(uVal)) {
        uName.setCustomValidity("Please double check your entry, it is either empty or has too many spaces");
    } else {
        uName.setCustomValidity("");
    }
    if (!validator.isTrimmed(pVal) || validator.isEmpty(pVal)) {
        pass.setCustomValidity("Please double check your entry, it is either empty or has too many spaces");
    } else {
        pass.setCustomValidity("");
    }

    
    event.preventDefault();
});