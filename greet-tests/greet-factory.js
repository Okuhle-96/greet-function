function greetFactoryFunction(){

    var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    var theName = "";
    var theNameObject = {};
    var theCounter = 0;

   var nameExists = "This name already exist!"

    var theXhosa = "Mholo, ";
    var theTsonga = "Ahee, ";
    var theSotho = "Dumelang, ";

    function setIsixhosa(xhosa){
        theXhosa = xhosa;
    }

    function setSesotho(sotho){
        theSotho = sotho;
    }
    function setXitsonga(tsonga){
        theTsonga = tsonga;
    }

    function setName(name){
        theName = name;
    }

    function setLanguage(language){
        if(!language){
            return "Please select your language!";
        }if (language === 'isixhosa'){
                greetIsiXhosa + getName();
                theCounter++;
        }if(language === "sesotho"){
            greetSesotho + getName();
            theCounter++;
        }if (language === "xitsonga"){
            greetXitsonga;
            theCounter++;
        }else if(userInput = ""){
            return "this"
        }
        names[userInput.value] = 1;
    }

    function setCounter(userInput) {
        
            if (theNameObject[userInput] === undefined) {
                theCounter++;
                theNameObject[userInput] = 1;       
            } else if (theNameObject.hasOwnProperty(userInput)){
                return "This name already exists!";
            }if (theNameObject[userInput] === ""){
                return "Nothing to add!"
            }
            theNameObject[userInput] = 1;
        }
    
    function greetIsiXhosa(){
        return theXhosa + getName();
    }

    function greetSesotho(){
        return theSotho + getName();
    }

    function greetXitsonga(){
        return theTsonga + getName();
    }

    function getName(){
        return theName;
    }

    function setErrorMessages(userInput){
        if (userInput === ""){
            return "Please enter yor name!";
        }if (userInput === !alphabets){
            return "Please enter a valid name!";
        }if (userInput === theNameObject.hasOwnProperty(userInput)){
            return nameExists;
        }
    }

    function getCounter(){
        return theCounter;
    }

    function setLocalStorage(){
        localStorage['usersGreeted'] = counter;
        localStorage.setItem("userNames", JSON.stringify(names));
    }

    function getItem(){
        if (localStorage['usersGreeted'] && localStorage['userNames']) {
            theCounter = Number(localStorage['usersGreeted']);
            theNameObject = JSON.parse((localStorage['userNames']));
            }
    }

    function clearCounter(){
        theCounter = 0;
        theNameObject = {};
    }


    
    return {
        setIsixhosa,
        setSesotho,
        setXitsonga,

        setCounter,
        setName,
        
        setErrorMessages,

        greetIsiXhosa,
        greetSesotho,
        greetXitsonga,

        setLanguage,
        getCounter,
        getName,

        setLocalStorage,
        getItem,
        clearCounter

    }

}
