let subbutton = document.getElementById('submitB');
let choise = document.getElementById('choise');

subbutton.addEventListener ('click', function Start(){

//Declare choice for computer.

let compChoice =  Math.floor(Math.random() * 3)
    if (compChoice === 0) {
        compChoice = "paper"; 
       
    };
    if (compChoice === 1) {
        compChoice = "rock"; 
       
    };
    if (compChoice === 2) {
        compChoice = "scissors"; 
       
    };

validation();
console.log (`Computer choose: ${compChoice}`);
console.log (`User choose: ${choise.value}`);
console.log ("Result is " + compare(compChoice, choise.value))


})

// Input validation

function validation() {
    if (choise.value === "paper" || choise.value  === "rock" || choise.value  === "scissors")
    {console.log ("I'm working! and input is " + choise.value)}
    else {console.log("I'm not working")}
    
}

// Compare user and computer choise

function compare(computer, human) {

    if (computer === human) {

        console.log ("It's a tie")
        return "It's a tie"
    }

    if (computer === "paper")
        {
            if(human === "rock")
            {console.log ("user won");
            return "user won"}
            else {console.log ("user lost")
            return "user lost"}
        }
    if (computer === "paper")
        {
            if(human === "scissors")
            {console.log("User won")
            return "user won"}
            else {console.log ("user lost")
            return "user lost"}
        }
    if (computer === "scissors") {

            if (human === "rock"){console.log("User won")
            return "user won"}
            else {console.log ("user lost")
            return "user lost"}

            }



}
