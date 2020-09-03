'use strict';
console.log('JS loaded');

// var userName;
// var askName;
// var askFood;
// var askHobby;
// var askVaca;

var userName = prompt('Welcome to my about me site. Who is going to be taking my quiz?');
// userName = userName.chartAt(0).toUppercase() + userName.slice(1);
console.log(userName) === "string"; // ('That\'s awesome! Let\'s get started ' + userName + '. Please answer the following with a yes or now response. Good luck!');
alert("That's awesome! Let's get started " + userName + ". Please answer the following with a yes or now response. Good luck!");

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
