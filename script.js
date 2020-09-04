 'use strict';
 console.log('JS loaded');

// // var userName;
// // var askName;
// // var askFood;
// // var askHobby;
// // var askVaca;

 var userName = prompt('Welcome to my about me site. Who is going to be taking my quiz?');
 //userName = userName.chartAt(0).toUppercase() + userName.slice(1);
 console.log(userName) === "string"; ('That\'s awesome! Let\'s get started ' + userName + '. Please answer the following with a yes or now response. Good luck!');
 alert("That's awesome! Let's get started " + userName + ". Please answer the following with a yes or now response. Good luck!");

 function guessingGame(){
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
 if(askName = "yes") {
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
        // break; 
         i = 5;
    }else if (parseInt(askAge) < correctAge) {
        alert("That's too low. Gotta guess higher...");
        console.log(askAge);
    //}   else (guess > 31); {} I don't understand, it sayd "syntax error in console.log"
    }else if (parseInt(askAge) > correctAge) {
        alert("That's too high. I'm not ancient!");
        console.log(askAge);
    } 
}
 }
  ageTest();

   function movies(){
 var askMovie = new Array ('Good Will Hunting', 'Shawshenk Redemption', 'Braveheart', 'Anchorman',
  'Vicky Christina Barcelona', 'Apocalypse Now', 'Batman Begins', 'Midnight In Paris', 'The Departed', 'Dumb and Dumber');
 var arrayMovie = askMovie.length
     for (var i = 0; i < 6; i++) {
         var question = prompt ('What are my favorite movies?')
        console.log(question);
             for (var j = 0; j < askMovie.length; j++){
                     if(askMovie[j] === question){
                     alert(question + 'How did you know?!');
                     console.log(askMovie);
                     break;
                }
             }
            if (i == 5) {
                alert('Good guesses, but these are my favorite ' + askMovie );

             }
    }
   }    
    movies();
// it was showing a console.log/alert with the full array of movies without asking
// i have no idea and also there has to be an easier way...
// for(var i = 0; i < 5; i++) {
//     askMovie = prompt("What's my favorite movie?");
//     if (askMovie === 'Good Will Hunting') {
//         prompt(askMovie + ' is one of my favorite movies!');
//     }
//     else if (askMovie === 'Shawshenk Redemption') {
//         prompt(askMovie + ' is one of my favorite movies!');
//     }
//     else if (askMovie === 'Braveheart') {
//         prompt(askMovie + ' is one of my favorite movies!');
//     }
//     else if (askMovie === 'Anchorman') {
//         prompt(askMovie + ' is one of my favorite movies!');
//     }
//     else if (askMovie === 'Vicky Christina Barcelona') {
//         prompt(askMovie + ' is one of my favorite movies!');
//     }
//     else if (askMovie === 'Apocalypse Now') {
//         prompt(askMovie + ' is one of my favorite movies!');
//     }
//     else if (askMovie === 'Batman Begins') {
//         prompt(askMovie + ' is one of my favorite movies!');
//     }
//     else if (askMovie === 'Midnight In Paris') {
//         prompt(askMovie + ' is one of my favorite movies!');
//     }
//     else if (askMovie === 'The Departed') {
//         prompt(askMovie + ' is one of my favorite movies!');
//     }
//     else if (askMovie === 'Dumb and Dumber') {
//         prompt(askMovie + ' is one of my favorite movies!');
//     }
//     //return prompt("I'm sorry, but one of these would be correct: " + askMovie);
// }

// var name = prompt("What is your name?");
// alert("Welcome, "+name+"!");

// var food = prompt("What is your favorite food?");
// alert("That sounds delicious!"+name+"!");

// var hobby = prompt("What is your name?");
// alert("Welcome, "+name+"!");

// var vaca = prompt("What is your name?");
// alert("Welcome, "+name+"!");

// var multitask = prompt("What is your name?");
// alert("Welcome, "+name+"!");
