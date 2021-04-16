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

    var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var selectLanguage = document.querySelector("input[name='langauge']:checked");

    var name = userInput.value.trim();

   
    
    if (userInput.value === "") {
        noValue.innerHTML = "Please enter your name!"
    } else {

        if (names[name] === undefined) {

            
            if (!selectLanguage) {
                noValue.innerHTML = "Please select your language!";
                // counter++;
            } else if (!selectLanguage && userInput.value === ""){
                noValue.innerHTML = "Please select your language enter your name!"
            }else if (selectLanguage) {

                returnUser.innerHTML = name;
                nameList.innerHTML = name;
                if (selectLanguage.value === "isixhosa") {
                    greetUser.innerHTML = greetInIsixhosa;
                    //namesGreeted.push(names);
                    namesGreeted++;
                    counter++;
                } else if (selectLanguage.value === "sesotho") {
                    greetUser.innerHTML = greetInSesotho;
                    namesGreeted++;
                    counter++;
                } if (selectLanguage.value === "xitsonga") {
                    greetUser.innerHTML = greetInXitsonga;
                    namesGreeted++;
                    counter++;
                } 
            }

            names[userInput.value] = 1;
            namesGreeted[userInput.value] = names;
        } else if (names.hasOwnProperty(name)){
            noValue.innerHTML = "This name already exists!";

        }if (name != alphabets){
            noValue.innerHTML = "Please enter a valid name!";
        
        }

    }
    
    countUsers.innerHTML = counter;
    userInput.value = "";
    
    localStorage['usersGreeted'] = counter;
    localStorage.setItem("userNames", JSON.stringify(names));
    
}
greetUserBtn.addEventListener('click', greetFunction);



if (localStorage['usersGreeted']) {
    counter = Number(localStorage['usersGreeted']);
}
countUsers.innerHTML = localStorage['usersGreeted'];


if (localStorage['userNames']){

    localStorage.getItem('userNames', JSON.stringify(names));

}

nameList.innerHTML = "";


function clearNumberFunction() {
    counter = 0;
    localStorage['usersGreeted'] = counter;
    returnUser.innerHTML = "";
    greetUser.innerHTML = "";
    countUsers.innerHTML = counter;

    names = {};  
}
clearUserBtn.addEventListener('click', clearNumberFunction);

