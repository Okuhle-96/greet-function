describe ("Greeting Exercise Factory Function", function(){
    describe ("Should be able to greet names entered", function(){
        it('Should return Okuhle', function(){

            let testingGreet = greetFactoryFunction();

            testingGreet.setName("Okuhle");

            assert.equal('Okuhle',testingGreet.getName());
        })

        it('Should return Achuma', function(){

            let testingGreet = greetFactoryFunction();

            testingGreet.setName("Achuma");

            assert.equal('Achuma',testingGreet.getName());
        })
    
    })

    describe ("Should be able to greet in three languages", function(){
        it('Should greet a user in IsiXhosa', function(){
            let testingGreet = greetFactoryFunction();
            assert.equal("Mholo, ",testingGreet.greetIsiXhosa());
        })

        it('Should greet a user in SeSotho', function(){
            let testingGreet = greetFactoryFunction();
            assert.equal('Dumelang, ',testingGreet.greetSesotho());
        })

        it('Should greet a user in Xitsonga', function(){
            let testingGreet = greetFactoryFunction();
            assert.equal('Ahee, ',testingGreet.greetXitsonga());
        })

        it('Should ask a user to select a language when its not selected', function(){
            let testingGreet = greetFactoryFunction();
            assert.equal('Please select your language!',testingGreet.setLanguage());
        })
    })

    describe ("Should be count names greeted", function(){
        it('Should increase the counter by one when one name is added', function(){
            let testingGreet = greetFactoryFunction();

            testingGreet.setCounter(('Tsholo'));

            assert.equal(1,testingGreet.getCounter());
        })

        it('Should increase the counter when greeting names', function(){
            let testingGreet = greetFactoryFunction();

            testingGreet.setCounter("Lulu");
            testingGreet.setCounter("Soso");
            testingGreet.setCounter("Mbali");

            assert.equal(3,testingGreet.getCounter());
        })


    })

    describe ("Clearing counter", function(){
        it('Should be able reset counter to its preserved state', function(){
            let testingGreet = greetFactoryFunction();

            testingGreet.setCounter("Okuhle");
            testingGreet.setCounter("Achuma");
            testingGreet.setCounter("Khanyisa");

            testingGreet.clearCounter();

            assert.equal(0,testingGreet.getCounter());
        })

    }) 
})
