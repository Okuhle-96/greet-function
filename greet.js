var userInput = document.querySelector(".enterName");
var greetUser = document.querySelector(".greet");
var returnUser = document.querySelector(".setOutput");
var noValue = document.querySelector(".error");

var greetUserBtn = document.querySelector(".getName");
var clearUserBtn = document.querySelector(".clearCount")

var countUsers = document.querySelector(".counter");

var nameList = document.querySelector(".names")
var nameListDiv = document.querySelector(".namesGreeted")

var counter = 0;

var names = {};
var namesGreeted = {};

var xhosaUsers = 0;
var sothoUsers = 0;
var tsonga = 0;

var greetInIsixhosa = "Mholo, ";
var greetInSesotho = "Dumelang, ";
var greetInXitsonga = "Ahee, ";

nameListDiv.innerHTML = "People Greeted";

function greetFunction() {

    var alphabets = /[a-zA-Z]\d+/;
    // var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var selectLanguage = document.querySelector("input[name='langauge']:checked");

    var name = userInput.value.trim();
    
    if (userInput.value === "") {
        
        noValue.innerHTML = "Please enter your name!";
        setTimeout(function(){
            noValue.innerHTML = "";
        }, 3000);
      
    }else if(userInput.value === "" && !selectLanguage){
        noValue.innerHTML = "Please enter your name and select your language!";
        setTimeout(function(){
            noValue.innerHTML = "";
        }, 3000);
    }if (!alphabets){
        return "Invalid name"
    } else {

        if (names[name] === undefined) {

            
            if (!selectLanguage) {
                noValue.innerHTML = "Please select your language!";
                setTimeout(function(){
                    noValue.innerHTML = "";
                }, 3000);
                if (userInput.value === "" ) {
        
                    noValue.innerHTML = "Please enter your name!";
                    setTimeout(function(){
                        noValue.innerHTML = "";
                    }, 3000);}
              
            }if (!selectLanguage && userInput.value === ""){
                noValue.innerHTML = "Please enter your name and select your language!";
                setTimeout(function(){
                    noValue.innerHTML = "";
                }, 3000);
              
            }
                else if (selectLanguage) {

                returnUser.innerHTML = name;
               
                if (selectLanguage.value === "isixhosa") {
                    greetUser.innerHTML = greetInIsixhosa;
                    counter++;
                } else if (selectLanguage.value === "sesotho") {
                    greetUser.innerHTML = greetInSesotho;
                    counter++;
                } if (selectLanguage.value === "xitsonga") {
                    greetUser.innerHTML = greetInXitsonga;
                    counter++;
                } 
            }
            
            namesGreeted[userInput.value] = names;
            // nameList.innerHTML = names;
            // console.log(names);
            
            names[userInput.value] = 1;
        } else if (names.hasOwnProperty(name)){
             noValue.innerHTML = "This name already exists!";
             setTimeout(function(){
                noValue.innerHTML = "";
            }, 3000);    
        }

    }
    countUsers.innerHTML = counter;
    userInput.value = "";
    
    localStorage['usersGreeted'] = counter;
    localStorage.setItem("userNames", JSON.stringify(names));

    deselectRadioBtns();
    getAndDisplayNames();
    validateInput();
}

greetUserBtn.addEventListener('click', greetFunction);

if (localStorage['usersGreeted']) {
    counter = Number(localStorage['usersGreeted']);
}

countUsers.innerHTML = localStorage['usersGreeted'];


if (localStorage['userNames']){

    localStorage.getItem('userNames', JSON.stringify(names));
    namesGreeted = JSON.parse(localStorage['userNames']);
}

// nameList.innerHTML = "";

function clearNumberFunction() {
    counter = 0;
    localStorage['usersGreeted'] = counter;
    returnUser.innerHTML = "";
    greetUser.innerHTML = "";
    countUsers.innerHTML = counter;

    names = {};  
}

clearUserBtn.addEventListener('click', clearNumberFunction);



// Displaying the names from the local storage.
function getAndDisplayNames() {
    // FIRST, WE CREATE AN UNORDERED LIST (ul) THAT WILL HOLD ALL THE NAMES
    var peopleGreetedList = document.createElement('ul');
    peopleGreetedList.className = 'names';
    // HERE, WE APPEND THE peopleGreetedList TO THE nameListDiv
    nameListDiv.append(peopleGreetedList);

    //  HERE, WE GET ALL THE NAMES IN LOCAL STORAGE
    var localStorageNames = JSON.parse(localStorage.getItem('userNames'));
    
    // Object.keys() FUNCTION MAKES AN ARRAY OF THE "keys" IN THE OBJECT, SO THAT ITS EASIER TO LOOP THROUGH
    const namesGreeted = Object.keys(localStorageNames)    

    // NOW, WE LOOP THROUGH THE LIST OF NAMES AND DISPLAY THEM TO THE USER
    namesGreeted.forEach(name => {
        peopleGreetedList.innerHTML += `<li>${name}</li>`;    
    });
}

// getAndDisplayNames();

// Using the regex thingy to make sure that the code does not take numbers and characters and also does not mix them together. 

// Also I need an error that will return"Please enter your name and select your language.

// And after the name has been greeted. The language needs to be deselected.
// THIS FUNCTION WILL DESELECT ANY RADIO BUTTON THAT IS CHECKED
function deselectRadioBtns() {
    // GET ALL THE RADIO INPUTS 
    var radios = document.querySelectorAll("[type='radio']");

    // LOOP THROUGH THE ARRAY
    radios.forEach(radio => {
        if(radio.checked == true) radio.checked = false;
    });
}

function validateInput() {
    var name = userInput.value;
    var alphabets = /[a-zA-Z]\d+/;
    for (var i = 0; i < name.length; i++){
        if (name !== alphabets){
            return "PLease enter a valid name!";
        }else if (name.includes(alphabets)){
            return name;
        }
    }
}
