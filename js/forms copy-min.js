var creditForm=document.getElementById("credit");creditForm.addEventListener("input",function(e){var t=document.querySelector("input[name=full-name]"),i=document.querySelector(".card-number"),a=document.querySelector("input[name=cvv]"),r=t.value,o=i.value,s=a.value;!validator.isTrimmed(r)||validator.isEmpty(r)?t.setCustomValidity("Please double check your entry, it is either empty or has too many spaces"):t.setCustomValidity(""),validator.isTrimmed(o)&&!validator.isEmpty(o)&&validator.isCreditCard(o)?i.setCustomValidity(""):i.setCustomValidity("Please double check your entry, it is not a valid credit card number"),!validator.isTrimmed(s)||validator.isEmpty(s)?a.setCustomValidity("Please double check your entry, it is not a valid cvv number"):a.setCustomValidity(""),e.preventDefault()});var signupForm=document.getElementById("signup");signupForm.addEventListener("input",function(e){var t=document.querySelector("input[name=first-name]"),i=document.querySelector("input[name=last-name]"),a=document.querySelector("input[name=email]"),r=t.value,o=i.value,s=a.value;!validator.isTrimmed(nVal)||validator.isEmpty(nVal)?t.setCustomValidity("Please double check your entry, it is either empty or has too many spaces"):t.setCustomValidity(""),!validator.isTrimmed(o)||validator.isEmpty(o)?i.setCustomValidity("Please double check your entry, it is either empty or has too many spaces"):i.setCustomValidity(""),validator.isTrimmed(s)&&!validator.isEmpty(s)&&validator.isEmailAddress(s)?a.setCustomValidity(""):a.setCustomValidity("Please double check your entry, it is not a valid credit card number"),e.preventDefault()});