 'use strict';
 console.log('JS loaded');


var userName = prompt('Welcome to my About Me site. Who is going to be taking my quiz?');
userName = userName.charAt(0).toUpperCase() + userName.slice(1);
console.log(userName);
alert("Let's get started " + userName + ". Please answer the following with a yes or no response. Good luck!");

var score = 0;

function guessingGame() {
    var askName = prompt('Is my middle name Steven? Please respond yes or no');
    if(askName === 'no') {
    console.log(askName.toLowerCase(), askName);
        alert('That is correct. My middle name is Allen.');
        ++score;
    }
    else {
        alert('That is incorrect. My middle name is Allen.');
}

    var askFood = prompt("Is my favorite food Italian?");
    if(askFood === "yes") {
        console.log(askFood.toLowerCase(), askFood);
        alert("That is correct. I love spaghetti and chicken parmesan!");
        ++ score;
    } 
    else {
        alert("That is incorrect. I love Italian food!");
    }

    var askHobby = prompt("Is one of my hobbies fishing?")
    if(askHobby === "no") {
        console.log(askHobby.toLowerCase(), askHobby);
        alert("You are correct. I have never been fishing in my life.");
        ++ score;
    } 
    else {
        alert("That is incorrect. I have never been fishing in my life.");
    }

    var askVaca = prompt("Have I ever been to Mexico?");
    if(askVaca === "yes") {
        console.log(askVaca.toLowerCase(), askVaca);
        alert("That is correct. I went this summer!");
        ++ score;
    } 
    else {
        alert("That is incorrect. I went this summer!");
    }

    var askExp = prompt("Did I ever work at a corn maze?");
    if(askExp === "yes") {
        console.log(askName.toLowerCase(), askName);
        alert("That is correct! I was a 'corn cop'.");
        ++ score;
    }
    else { 
        alert("That is incorrect. I was a 'corn cop'.");
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
                ++ score;
        }
        else if (parseInt(askAge) < correctAge) {
            alert("That's too low. Gotta guess higher...");
            console.log(askAge);
        }
        else if (parseInt(askAge) > correctAge) {
            alert("That's too high. I'm not ancient!");
            console.log(askAge);
        } 
    }
}
    ageTest();


function movies(){
    var askMovie = ['good will hunting', 'shawshenk redemption', 'braveheart', 'anchorman',
    'vicky christina barcelona', 'apocalypse now', 'batman begins', 'midnight in paris', 'the departed', 'dumb and dumber']
        outerLoop: for (var i = 0; i < 6; i++) {
            var question = prompt("Here are 10 of my favorite movies: Good Will Hunting, Shawshenk Redemption, Cool Hand Luke, Braveheart, Talladega Nights, Vicky Christina Barcelona, Apocalypse Now, Batman Begins, Midnight In Paris or The Departed...which do you think is my favorite?")
            console.log(question.toLowerCase);
            for (var j = 0; j < askMovie.length; j++){
                        if(askMovie[j].toLowerCase === question.toLowerCase){
                        alert('Good Will Hunting is my favorite! How did you know?!');
                        console.log(askMovie);
                        ++ score;
                        
                        break outerLoop;
                    }
                }
                            
                if (i === 5) {
                alert('Those are good guesses, ' + userName + ', but Good Will Hunting is my favorite.');

                }
    }
}    
    movies();


alert('Thank you for taking part in my super awesome About Me quiz! You got ' + score + '/7 correct. Have a good day ' + userName + '!');
