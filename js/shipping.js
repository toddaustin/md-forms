// validation event listeners

var myForm = document.getElementById("shipping");

myForm.addEventListener('input', function(event) {
    // stop the event from its default action: submitting the form (for our validation, submission is not desired)
    var fName = document.querySelector('input[name=first-name]');
    var lName = document.querySelector('input[name=last-name]');
    var address = document.querySelector('input[name=address]');
    var city = document.querySelector('input[name=city]');
    var country = document.querySelector('input[name=country]');

    var fVal = fName.value;
    var lVal = lName.value;
    var aVal = address.value;
    var cityVal = city.value;
    var countryVal = country.value;

    if (!validator.isTrimmed(fVal) || validator.isEmpty(fVal)) {
        fName.setCustomValidity("Please double check your entry, it is either empty or has too many spaces");
    } else {
        fName.setCustomValidity("");
    }
    if (!validator.isTrimmed(lVal) || validator.isEmpty(lVal)) {
        lName.setCustomValidity("Please double check your entry, it is either empty or has too many spaces");
    } else {
        lName.setCustomValidity("");
    }
    if (!validator.isTrimmed(aVal) || validator.isEmpty(aVal)) {
        address.setCustomValidity("Please double check your entry, it is either empty or has too many spaces");
    } else {
        address.setCustomValidity("");
    }
    if (!validator.isTrimmed(cityVal) || validator.isEmpty(cityVal)) {
        city.setCustomValidity("Please double check your entry, it is either empty or has too many spaces");
    } else {
        city.setCustomValidity("");
    }
    if (!validator.isTrimmed(countryVal) || validator.isEmpty(countryVal)) {
        country.setCustomValidity("Please double check your entry, it is either empty or has too many spaces");
    } else {
        country.setCustomValidity("");
    }

    var billing = document.querySelector("input[name=same]").checked;
    if (!billing){
        var bfName = document.querySelector('input[name=b-first-name]');
        var blName = document.querySelector('input[name=b-last-name]');
        var baddress = document.querySelector('input[name=b-address]');
        var bcity = document.querySelector('input[name=b-city]');
        var bcountry = document.querySelector('input[name=b-country]');
        var bfVal = bfName.value;
        var blVal = blName.value;
        var baVal = baddress.value;
        var bcityVal = bcity.value;
        var bcountryVal = bcountry.value;

        if (!validator.isTrimmed(bfVal) || validator.isEmpty(bfVal)) {
            bfName.setCustomValidity("Please double check your entry, it is either empty or has too many spaces");
        } else {
            bfName.setCustomValidity("");
        }
        if (!validator.isTrimmed(blVal) || validator.isEmpty(blVal)) {
            blName.setCustomValidity("Please double check your entry, it is either empty or has too many spaces");
        } else {
            blName.setCustomValidity("");
        }
        if (!validator.isTrimmed(baVal) || validator.isEmpty(baVal)) {
            baddress.setCustomValidity("Please double check your entry, it is either empty or has too many spaces");
        } else {
            baddress.setCustomValidity("");
        }
        if (!validator.isTrimmed(bcityVal) || validator.isEmpty(bcityVal)) {
            bcity.setCustomValidity("Please double check your entry, it is either empty or has too many spaces");
        } else {
            bcity.setCustomValidity("");
        }
        if (!validator.isTrimmed(bcountryVal) || validator.isEmpty(bcountryVal)) {
            bcountry.setCustomValidity("Please double check your entry, it is either empty or has too many spaces");
        } else {
            bcountry.setCustomValidity("");
        }
    }
    
    event.preventDefault();
});