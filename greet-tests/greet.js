var userInput = document.querySelector(".enterName");
var greetUser = document.querySelector(".greet");
var returnUser = document.querySelector(".setOutput");

var greetUserBtn = document.querySelector(".getName");
var clearUserBtn = document.querySelector(".clearCount");

var countUsers = document.querySelector(".counter");
var counter = 0;
var names = {};

var greetInIsixhosa = "Mholo, ";
var greetInSesotho = "Dumelang, ";
var greetInXitsonga = "Ahee, ";

function greetFunction() {

    
    var selectLanguage = document.querySelector("input[name='langauge']:checked");

    var name = userInput.value.trim();

   
    
    if (userInput.value === "") {
        
    } else {

        if (names[name] === undefined) {

            if (!selectLanguage) {
                returnUser.innerHTML = name;
                counter++;
            } else if (selectLanguage) {

                returnUser.innerHTML = name;

                if (selectLanguage.value === "isixhosa") {
                    greetUser.innerHTML = greetInIsixhosa;
                    counter++;
                } else if (selectLanguage.value === "sesotho") {
                    greetUser.innerHTML = greetInSesotho;
                    counter++;
                } else if (selectLanguage.value === "xitsonga") {
                    greetUser.innerHTML = greetInXitsonga;
                    counter++;
                }
            }

            names[userInput.value] = 1;
        } else if (names.hasOwnProperty(trim)){

        }

    }
    
    countUsers.innerHTML = counter;
    userInput.value = "";
    localStorage['usersGreeted'] = counter;
    
}

greetUserBtn.addEventListener('click', greetFunction);

countUsers.innerHTML = localStorage['usersGreeted'];

if (localStorage['usersGreeted']) {
    counter = Number(localStorage['usersGreeted']);
}


function clearUserFunction() {
    counter = 0;
    localStorage['usersGreeted'] = counter;
    returnUser.innerHTML = " . . .";
    greetUser.innerHTML = "Hello, ";
    countUsers.innerHTML = counter;

    names = {};
    
}

clearUserBtn.addEventListener('click', clearUserFunction);

