// validation event listeners

var myForm = document.getElementById("credit");



 
    myForm.addEventListener('input', function(event) {
        // stop the event from its default action: submitting the form (for our validation, submission is not desired)
        var fName = document.querySelector('input[name=full-name]');
        var cNum = document.querySelector('.card-number');
        var cvv = document.querySelector('input[name=cvv]');
        var nVal = fName.value;
        var cVal = cNum.value;
        var cvvVal = cvv.value;
        var count = 0;

        if (!validator.isTrimmed(nVal) || validator.isEmpty(nVal)) {
            fName.setCustomValidity("Please double check your entry, it is either empty or has too many spaces");
        } else {
            fName.setCustomValidity("");
        }

        if (!validator.isTrimmed(cVal) || validator.isEmpty(cVal) || !validator.isCreditCard(cVal)) {
            cNum.setCustomValidity("Please double check your entry, it is not a valid credit card number");
        } else {
            cNum.setCustomValidity("");
        }
        if (!validator.isTrimmed(cvvVal) || validator.isEmpty(cvvVal)) {
            cvv.setCustomValidity("Please double check your entry, it is not a valid cvv number");
        } else {
            cvv.setCustomValidity("");
        }
        event.preventDefault();
    });

