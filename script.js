 'use strict';
 console.log('JS loaded');

// // var userName;
// // var askName;
// // var askFood;
// // var askHobby;
// // var askVaca;

var userName = prompt('Welcome to my about me site. Who is going to be taking my quiz?');
userName = userName.charAt(0).toUpperCase() + userName.slice(1);
console.log(userName)
alert("Let's get started " + userName + ". Please answer the following with a yes or no response. Good luck!");

// function guessingGame() {
//     var askName = prompt('Is my middle name Steven?');
//     if(askName == 'no') {
//     console.log(askName.toLowerCase(), askName);
//         alert('You\'re right, my middle name is Allen.');
//     }
//     else {
//         alert('I\'m sorry, but my middle name is Allen.');
// }

//     var askFood = prompt("Is my favorite food Italian?");
//     if(askFood == "yes") {
//         console.log(askFood.toLowerCase(), askFood);
//         alert("You're right, I love spaghetti and chicken parmesan!");
//     } 
//     else {
//         alert("Nahhh, I love Italian food!");
//     }

//     var askHobby = prompt("Is one of my hobbies fishing?")
//     if(askHobby == "no") {
//         console.log(askHobby.toLowerCase(), askHobby);
//         alert("You are correct! I have never been fishing in my life.");
//     } 
//     else {
//         alert("I have never been, but I would like to.");
//     }

//     var askVaca = prompt("Have I ever been to Mexico?");
//     if(askVaca = "yes") {
//         console.log(askVaca.toLowerCase(), askVaca);
//         alert("I went this summer, but everything was closed because of COVID-19.");
//     } 
//     else {
//         alert("I was lucky enough to go this summer!");
//     }

//     var askExp = prompt("Did I ever work at a corn maze?");
//     if(askExp = "yes") {
//         console.log(askName.toLowerCase(), askName);
//         alert("Yeah baby! I was a 'corn cop'!");
//     }
//     else { 
//         alert("I definitely was back in the day.");
//     }
//     }
//     guessingGame();

//     function ageTest(){

// var correctAge = 31;

//     for(var i = 0 ; i < 4; i++) {
//     var askAge = prompt("How old am I?");

//     if(parseInt(askAge) === correctAge) {
//         alert("Congratulations, you got it right!"); 
//         // break; 
//             i = 5;
//     }else if (parseInt(askAge) < correctAge) {
//         alert("That's too low. Gotta guess higher...");
//         console.log(askAge);
//     //}   else (guess > 31); {} I don't understand, it sayd "syntax error in console.log"
//     }else if (parseInt(askAge) > correctAge) {
//         alert("That's too high. I'm not ancient!");
//         console.log(askAge);
//     } 
// }
//     }
//     ageTest();

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
            
            
            
            
            
            // if(askMovie.includes(question())) {
                //     alert(question + '! ' + userName + ', how did you know?!');
                //     console.log(askMovie);
                //     break;
                // }
             
                if (i === 5) {
                alert('Those are good guesses, ' + userName + ', but these are my favorite: Good Will Hunting, Shawshenk Redemption, Braveheart, Anchorman, Vicky Christina Barcelona, Apocalypse Now, Batman Begins, Midnight In Paris, The Departed and Dumb and Dumber');

                }
    }
    }    
    movies();



//     for (var j = 0; j < askMovie.length; j++){
//         if(askMovie[j] == question){
//         alert(question + '! ' + userName + ', how did you know?!');
//         console.log(askMovie);
        
//         break;
//     }
// }





// if (userName !== Number || userName == (Number)) {

//     // console.log ("Please enter your name using letters.");
//     alert("Please enter your name using letters.");
//     prompt('Welcome to my about me site. Who is going to be taking my quiz?');
//     }
//     else {
//         // console.log("Let's get started " + userName + ". Please answer the following with a yes or no response. Good luck!");
//         alert("Let's get started " + userName + ". Please answer the following with a yes or no response. Good luck!");
//     }

// if (userName === null || isNaN(userName)) {
//      while (userName !== null || !isNaN(userName)) {
//          console.log("Please enter your name using letters.");
//          userName = prompt("Welcome to my about me site. Who is going to be taking my quiz?");
//       } if (userName !== null || !usNaN(userName)) {
//              console.log("Let's get started " + userName + ". Please answer the following with a yes or no response. Good luck!");
//          }
// else console.log("Let's get started " + userName + ". Please answer the following with a yes or no response. Good luck!");
//         }

//  userName = userName.chartAt(0).toUppercase() + userName.slice(1);
//  console.log(userName) === "string"; ('That\'s awesome! Let\'s get started ' + userName + '. Please answer the following with a yes or now response. Good luck!');
//  alert("That's awesome! Let's get started " + userName + ". Please answer the following with a yes or now response. Good luck!");

//  function guessingGame(){
//  var askName = prompt('Is my middle name Steven?');
//  if(askName == 'no') {
//     console.log(askName.toLowerCase(), askName);
//      alert('You\'re right, my middle name is Allen.');
//  }
//  else {
//      alert('I\'m sorry, but my middle name is Allen.');
//  }

//  var askFood = prompt("Is my favorite food Italian?");
//  if(askFood == "yes") {
//      console.log(askFood.toLowerCase(), askFood);
//      alert("You're right, I love spaghetti and chicken parmesan!");
//  } 
//  else {
//      alert("Nahhh, I love Italian food!");
//  }

//  var askHobby = prompt("Is one of my hobbies fishing?")
//  if(askHobby == "no") {
//      console.log(askHobby.toLowerCase(), askHobby);
//      alert("You are correct! I have never been fishing in my life.");
//  } 
//  else {
//        alert("I have never been, but I would like to.");
//  }

//  var askVaca = prompt("Have I ever been to Mexico?");
//  if(askVaca = "yes") {
//      console.log(askVaca.toLowerCase(), askVaca);
//      alert("I went this summer, but everything was closed because of COVID-19.");
//  } 
//  else {
//        alert("I was lucky enough to go this summer!");
//  }

//  var askExp = prompt("Did I ever work at a corn maze?");
//  if(askName = "yes") {
//      console.log(askName.toLowerCase(), askName);
//      alert("Yeah baby! I was a 'corn cop'!");
//  }
//  else { 
//      alert("I definitely was back in the day.");
//  }
//  }
//  guessingGame();

//  function ageTest(){

// var correctAge = 31;

//     for(var i = 0 ; i < 4; i++) {
//     var askAge = prompt("How old am I?");

//     if(parseInt(askAge) === correctAge) {
//       alert("Congratulations, you got it right!"); 
//         // break; 
//          i = 5;
//     }else if (parseInt(askAge) < correctAge) {
//         alert("That's too low. Gotta guess higher...");
//         console.log(askAge);
//     //}   else (guess > 31); {} I don't understand, it sayd "syntax error in console.log"
//     }else if (parseInt(askAge) > correctAge) {
//         alert("That's too high. I'm not ancient!");
//         console.log(askAge);
//     } 
// }
//  }
//   ageTest();

//    function movies(){
//  var askMovie = new Array ('Good Will Hunting', 'Shawshenk Redemption', 'Braveheart', 'Anchorman',
//   'Vicky Christina Barcelona', 'Apocalypse Now', 'Batman Begins', 'Midnight In Paris', 'The Departed', 'Dumb and Dumber');
//  var arrayMovie = askMovie.length
//      for (var i = 0; i < 6; i++) {
//          var question = prompt ('What are my favorite movies?')
//         console.log(question);
//              for (var j = 0; j < askMovie.length; j++){
//                      if(askMovie[j] === question){
//                      alert(question + 'How did you know?!');
//                      console.log(askMovie);
//                      break;
//                 }
//              }
//             if (i == 5) {
//                 alert('Good guesses, but these are my favorite ' + askMovie );

//              }
//     }
//    }    
//     movies();
