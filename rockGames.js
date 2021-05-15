let paper = document.getElementById('Paper');
let rock = document.getElementById('Rock');
let scissors = document.getElementById('Scissors');
let subbutton = document.getElementById('submit');

subbutton.addEventListener ('onclick', function Start(){console.log ("Im working!")})


//Declare choice for computer

let compChoice =  Math.floor(Math.random() * 3);

    if (compChoice === 0) {
        compChioce = paper; 
        console.log ("Copmuter Choose paper");
    };

    if (compChoice === 1) {
        compChioce = rock; 
        console.log ("Copmuter Choose rock")
    };

    if (compChoice === 2) {
        compChioce = scissors; 
        console.log ("Copmuter Choose scissors")
    };
console.log (compChoice)
})
