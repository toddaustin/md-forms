// validation event listeners

var searchForm = document.getElementById("search");

searchForm.addEventListener('input', function(event) {
    // stop the event from its default action: submitting the form (for our validation, submission is not desired)
    var s = document.querySelector('input[name=search]');

    var sVal = s.value;
    
    if (!validator.isTrimmed(sVal) || validator.isEmpty(sVal)) {
        s.setCustomValidity("Please double check your entry, it is either empty or has too many spaces");
    } else {
        s.setCustomValidity("");
    }
   
    event.preventDefault();
});