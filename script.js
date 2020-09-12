 'use strict';
 console.log('JS loaded');


var userName = prompt('Welcome to my About Me site. Who is going to be taking my quiz?');
userName = userName.charAt(0).toUpperCase() + userName.slice(1);
console.log(userName)
alert("Let's get started " + userName + ". Please answer the following with a yes or no response. Good luck!");


function guessingGame() {
    var askName = prompt('Is my middle name Steven?');
    if(askName == 'no') {
    console.log(askName.toLowerCase(), askName);
        alert('You\'re right, my middle name is Allen.');
    }
    else {
        alert('I\'m sorry, but my middle name is Allen.');
}

    var askFood = prompt("Is my favorite food Italian?");
    if(askFood == "yes") {
        console.log(askFood.toLowerCase(), askFood);
        alert("You're right, I love spaghetti and chicken parmesan!");
    } 
    else {
        alert("Nahhh, I love Italian food!");
    }

    var askHobby = prompt("Is one of my hobbies fishing?")
    if(askHobby == "no") {
        console.log(askHobby.toLowerCase(), askHobby);
        alert("You are correct! I have never been fishing in my life.");
    } 
    else {
        alert("I have never been, but I would like to.");
    }

    var askVaca = prompt("Have I ever been to Mexico?");
    if(askVaca = "yes") {
        console.log(askVaca.toLowerCase(), askVaca);
        alert("I went this summer, but everything was closed because of COVID-19.");
    } 
    else {
        alert("I was lucky enough to go this summer!");
    }

    var askExp = prompt("Did I ever work at a corn maze?");
    if(askExp = "yes") {
        console.log(askName.toLowerCase(), askName);
        alert("Yeah baby! I was a 'corn cop'!");
    }
    else { 
        alert("I definitely was back in the day.");
    }
    }
    guessingGame();


function ageTest(){
    var correctAge = 31;

    for(var i = 0 ; i < 4; i++) {
    var askAge = prompt("How old am I?");
    if(parseInt(askAge) === correctAge) {
        alert("Congratulations, you got it right!"); 
            i = 5;
    }else if (parseInt(askAge) < correctAge) {
        alert("That's too low. Gotta guess higher...");
        console.log(askAge);
    }else if (parseInt(askAge) > correctAge) {
        alert("That's too high. I'm not ancient!");
        console.log(askAge);
    } 
}
    }
    ageTest();


function movies(){
    var askMovie = ['Good Will Hunting', 'Shawshenk Redemption', 'Braveheart', 'Anchorman',
    'Vicky Christina Barcelona', 'Apocalypse Now', 'Batman Begins', 'Midnight In Paris', 'The Departed', 'Dumb and Dumber']
        outerLoop: for (var i = 0; i < 6; i++) {
            var question = prompt('What is one of my favorite movies?')
            console.log(question);
            for (var j = 0; j < askMovie.length; j++){
                        if(askMovie[j] == question){
                        alert(question + '! ' + userName + ', how did you know?!');
                        console.log(askMovie);
                        
                        break outerLoop;
                    }
                }
                         
                if (i === 5) {
                alert('Those are good guesses, ' + userName + ', but these are my favorite: Good Will Hunting, Shawshenk Redemption, Braveheart, Anchorman, Vicky Christina Barcelona, Apocalypse Now, Batman Begins, Midnight In Paris, The Departed and Dumb and Dumber');

                }
    }
    }    
    movies();

alert('Thank you for taking part in my super awesome About Me quiz! Have a good day ' + userName + '!');
