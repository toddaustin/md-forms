/* Project Assignment 1: Create JavaScript Validation Functions */
(function(window) {

    var validator = {};

    //Checks if the input parameter is an email address,
    //consisting of three parts: An email address consists of two strings combined by an @ symbol.
    validator.isEmailAddress = function(email) {
        if (email != undefined) {
            var emailSplit = email.split('@');
            if (emailSplit.length != 2 || emailSplit[0] === "" || emailSplit[1] === "") {
                return false;
            } else {
                return true;
            }
        } else {
            throw new TypeError(' email argument cannot be empty');
        }
    };

    //Checks if the input parameter is a valid phone number for your country.
    validator.isPhoneNumber = function(num) {
        if (num != undefined) {
            if (num.length === 10 && !isNaN(num)) {
                return true;
            } else {
                return false;
            }
        } else {
            throw new TypeError(' num argument cannot be empty');
        }
    };

    //Returns the input parameter text with all symbols removed. Symbols refer to any non-alphanumeric character. 
    //A character is considered alphanumeric if it matches one of the following: a—z, A—Z, or 0—9. Ignore whitespace.
    validator.withoutSymbols = function(sym) {
        if (sym != undefined) {
            var noSymbol = [" ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
            var symLength = sym.length;
            var str = "";
            for (i = 0; i < symLength; i++) {
                if (noSymbol.indexOf(sym[i]) > -1) {
                    str += sym[i];
                } else {
                    str += "";
                }
            }
            return str;
        } else {
            throw new TypeError(' sym argument cannot be empty');
        }
    };

    //Checks if the input parameter text is a valid date. 
    //For your purposes, a valid date is any string that can be turned into a JavaScript Date Object.
    validator.isDate = function(d) {
        if (d != undefined) {
            var isDate = new Date(d);
            return !isNaN(isDate.valueOf());
        } else {
            throw new TypeError(' d argument cannot be empty');
        }
    };

    //Checks if the input parameter is a date that comes after the reference date. 
    //Both the input and the reference can be strings or Date Objects. 
    //This function relies on two valid dates; if two are not found, it should throw a new error.
    validator.isBeforeDate = function(input, reference) {
        if (input != undefined || reference != undefined) {
            if (validator.isDate(input) && validator.isDate(reference)) {
                if (new Date(input) < new Date(reference)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return "Invalid Dates";
            }
        } else {
            throw new TypeError(' input and reference arguments cannot be empty');
        }
    };


    validator.isAfterDate = function(input, reference) {
        if (input != undefined || reference != undefined) {
            if (validator.isDate(input) && validator.isDate(reference)) {
                if (new Date(input) > new Date(reference)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return "Invalid Dates"
            }
        } else {
            throw new TypeError(' input and reference arguments cannot be empty');
        }
    };


    validator.isBeforeToday = function(input) {
        if (input != undefined) {
            var today = new Date();
            if (validator.isDate(input)) {
                if (new Date(input) < today) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return "Invalid Date";
            }
        } else {
            throw new TypeError(' input argument cannot be empty');
        }
    };


    validator.isAfterToday = function(input) {
        if (input != undefined) {
            var today = new Date();
            if (validator.isDate(input)) {
                if (new Date(input) > today) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return "Invalid Date";
            }
        } else {
            throw new TypeError(' input argument cannot be empty');
        }
    };

    //    Checks the input parameter and returns true if it is an empty string–a string with no length 
    //    or characters that is represented as "" or only contains whitespace(s).

    validator.isEmpty = function(input) {
        if (input === undefined) {
            return false;
        } else {
            var remSpace = input.split(" ").join("");
            if (remSpace.length === 0) {
                return true;
            } else {
                return false;
            }
        }
    };

    validator.contains = function(input, words) {
        if (input != undefined || words != undefined) {
            var punct = ["+", ",", ".", "-", "'", "\"", "&", "!", "?", ":", ";", "#", "~", "=", "/", "$", "£", "^", "(", ")", "_", "<", ">"];
            var iLength = input.length;
            var str = "";
            for (i = 0; i < iLength; i++) {
                if (punct.indexOf(input[i]) === -1) {
                    str += input[i];
                } else {
                    str += " ";
                }
            }
            var iSplit = str.toLowerCase().split(" ");
            var wLength = words.length;
            for (i = 0; i < wLength; i++) {
                var myWord = words[i].toLowerCase();
                if (iSplit.indexOf(myWord) !== -1) {
                    return true;
                } else {
                    return false;
                }
            }
        } else {
            throw new TypeError(' arguments cannot be empty');
        }
    };

    validator.lacks = function(input, words) {
        if (input != undefined || words != undefined) {
            var punct = ["+", ",", ".", "-", "'", "\"", "&", "!", "?", ":", ";", "#", "~", "=", "/", "$", "£", "^", "(", ")", "_", "<", ">"];
            var iLength = input.length;
            var str = "";
            for (i = 0; i < iLength; i++) {
                if (punct.indexOf(input[i]) === -1) {
                    str += input[i];
                } else {
                    str += " ";
                }
            }
            var iSplit = str.toLowerCase().split(" ");
            var wLength = words.length;
            for (i = 0; i < wLength; i++) {
                var myWord = words[i].toLowerCase();
                if (iSplit.indexOf(myWord) === -1) {
                    return true;
                } else {
                    return false;
                }
            }
        } else {
            throw new TypeError(' arguments cannot be empty');
        }
    };

    /* Checks that the input text parameter contains only strings found within the strings array. 
     Note that this function doesn’t use a strong word definition the way .contains and .lacks does. The function should be case-insensitive. */
    validator.isComposedOf = function(input, strings) {
        if (input != undefined || strings != undefined) {
            var inputLower = validator.withoutSymbols(input.toLowerCase().split(" ").join(""));
            sLength = strings.length;
            for (i = 0; i < sLength; i++) {
                var stringsLower = strings[i].toLowerCase();
                while (inputLower.indexOf(sLowercase) !== -1) {
                    inputLower = inputLower.replace(stringsLower, "");
                }
            }
            if (inputLower.length > 0) {
                return false;
            } else {
                return true;
            }
        } else {
            throw new TypeError(' arguments cannot be empty');
        }
    };

    validator.isLength = function(input, n) {
        if (input != undefined || n != undefined) {
            return (input.length <= n) ? false : true;
        } else {
            throw new TypeError(' arguments cannot be empty');
        }
    };

    validator.isOfLength = function(input, n) {
        if (input != undefined || n != undefined) {
            return (input.length >= n) ? true : false;
        } else {
            throw new TypeError(' arguments cannot be empty');
        }
    }

    /*Counts the number of words in the input parameter. Refer to the definition of word 
    used in the description of the .contains function above. */

    validator.countWords = function(input) {
        if (input != undefined) {
            var str = "";
            iLength = input.length;
            for (var i = 0; i < iLength; i++) {
                if (input[i].toLowerCase() != input[i].toUpperCase()) {
                    str += input[i];
                } else {
                    str += " ";
                }
            }
            str = str.trim();
            return str.split(" ").length;
        } else {
            throw new TypeError(' input cannot be empty');
        }
    }

    // Checks if the input parameter has a word count less than or equal to the n parameter.
    validator.lessWordsThan = function(input, n) {
        if (input != undefined || n != undefined) {
            var wordCount = input.split(' ').length;
            return wordCount <= n;
        } else {
            throw new TypeError(' input cannot be empty');
        }
    }

    // Checks if the input parameter has a word count greater than or equal to the n parameter.
    validator.moreWordsThan = function(input, n) {
            if (input != undefined || n != undefined) {
                var wordCount = input.split(' ').length;
                return wordCount >= n;
            } else {
                throw new TypeError(' arguments cannot be empty');
            }
        }
        /* Checks that the input parameter matches all of the following:
            input is greater than or equal to the floor parameter
            input is less than or equal to the ceil parameter. */

    validator.isBetween = function(input, floor, ceil) {
        if (input != undefined || floor != undefined || ceil != undefined) {
            return input >= floor && input <= ceil;
        } else {
            throw new TypeError(' arguments cannot be empty');
        }
    }

    /*  Checks that the input parameter string is only composed of the following characters:
        a—z, A—Z, or 0—9. Unicode characters are intentionally disregarded */
    validator.isAlphanumeric = function(input) {
        if(input != undefined){
            var noSymbol = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
            var foundOne = 0;
     
            for (i = 0; i < input.length; i++) {
                if (noSymbol.indexOf(input[i]) < 0) {
                    foundOne++;
                }
            }
            return foundOne === 0;
        
        } else {
            throw new TypeError(' arguments cannot be empty');
        }
    }

    /*  Checks if the input parameter is a credit card or bank card number. A credit card number will be defined as
        four sets of four alphanumeric characters separated by hyphens (-), or a single string of alphanumeric characters 
        (without hyphens).
    */
    validator.isCreditCard = function(input) {
// input must be string, otherwise the dash will subtract
    var cardNums = input.split("-");
    if (cardNums.length === 1) {
        if (input.length !== 16) return false;
    } else {
        if (cardNums.length === 4) {
            for (var i = 0; i < cardNums.length; i++) {
                if (cardNums[i].length !== 4) return false;
            }
        } else {
            return false;
        }
    }
    var cardNum = cardNums.join("");
    return validator.isAlphanumeric(cardNum);
   }
 
        /*  Checks if the input string is a hexadecimal color, such as #3677bb. Hexadecimal colors are strings with 
            a length of 7 (including the #), using the characters 0—9 and A—F. 
            isHex should also work on shorthand hexadecimal colors, such as #333. 
            The input must start with a # to be considered valid.*/
    validator.isHex = function(input) {
        var validChars = ["A", "B", "C", "D", "E", "F", "a", "b", "c", "d", "e", "f", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        if (input.length !== 7 && input.length !== 4 || input.charAt(0) != "#") {
            return false;
        } else {
            for (var i = 1; i < input.length; i++) {
                if (validChars.indexOf(input[i]) < 0) {
                    return false;
                }
            }
            return true;
        }
    }

    /*Checks if the input string is an RGB color, such as rgb(200, 26, 131). An RGB color consists of:
            Three numbers between 0 and 255
            A comma between each number
            The three numbers should be contained within “rgb(” and “)“. 
    */
    validator.isRGB = function(input) {
        if (input != undefined) {
              var counter = 0;
              var begin = input.substring(0, 4);
              var numbers = input.substring(4, input.length - 1).split(',');
              if (begin !== "rgb(" && input.last) {
                return false;
              } else {
                for(var i = 0; i < numbers.length; i++){
                 counter += validator.isBetween(numbers[i], 0, 255);
                }
                return (counter == 3) ? true : false ;
              }
        } else {
         throw new TypeError(' input cannot be empty');
        }
        
    }
 
    /* Checks if the input string is an HSL color, such as hsl(122, 1, 1). An HSL color consists of:
    Three numbers:
        the first number, Hue, is between 0 and 360
        the second and third numbers, Saturation and Lightness, are between 0 and 1
        A comma between each number
        The three numbers should be contained within “hsl(” and “)“. */
    validator.isHSL = function(input){
        if (input != undefined) {
            var begin = input.substring(0, 4);
            var end = input.endsWith(')');
            console.log(end);
            var numbers = input.substring(4, input.length-1).split(',');
            if (begin !== "hsl(" || end === false){
                return false;
            } else {
                return (numbers[0] >= 0 && numbers[0] <=360) &&
                       (numbers[1] >= 0 && numbers[1] <= 1) &&
                       (numbers[2] >= 0 && numbers[2] <= 1); 
            }
        } else {
            throw new TypeError(' input cannot be empty');
        }
    }

    /*Checks if the input parameter is a hex, RGB, or HSL color type. */
    validator.isColor = function(input) {
    if (input != undefined) {
      if (validator.isHex(input)){
        return true;
      } else if (validator.isRGB(input)) {
        return true;
      } else if (validator.isHSL(input)){
        return true;
      } else {
        return false;
      }
    } else {
       throw new TypeError(' input cannot be empty');
    } 
  }

    /*Checks if the input parameter has leading or trailing whitespaces or too many spaces between words. 
    Leading refers to before while trailing refers to after. This function will help validate cases where 
    extra spaces were added accidentally by the user. */
    validator.isTrimmed = function(input) {
        var s = input.split(" ");
        for (var i = 0; i < s.length; i++){
           if (s[i] === "") {
              return false;
           }
       }
       return true;
    }

    window.validator = validator;

})(window);
