function greetFactoryFunction(){

    var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var theName = "";
    var theNameObject = {};
    var theCounter = 0;

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
        }else if (language === ){
                greetIsiXhosa;
        }if(language === greetSesotho){}


    }

    function setCounter(){
        
    }
   

    function greetIsiXhosa(){
        return theXhosa + theName;
    }

    function greetSesotho(){
        return theSotho + theName;
    }

    function greetXitsonga(){
        return theTsonga + theName;
    }

    function getName(){
        return theName;
    }

    function setErrorMessages(userInput){
        if (userInput === ""){
            return "Please enter yor name!";
        }if (userInput === !alphabets){
            return "Please enter a valid name!";
        }if (useInput === th){
            return "This name already exists!"
        }
    }

    function getCounter(){
        return theCounter;
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

        getCounter,
        getName


    }

}