// Declare variables for DOM elements

let paper = document.getElementById('paper');
let rock = document.getElementById('rock');
let scissors = document.getElementById('scissors');

let subbutton = document.getElementById('submitB');

//let choise = document.getElementById('choise'); input text remove

//Click  

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

    console.log (`Computer choose: ${compChoice}`);
    xMan();
    let getUserChoice = xMan;
    console.log ("Result is: " + user);
    })


// Get user choise

    function xMan() {
    
    if(paper.checked) 
    {   user = "paper";
        console.log ("User choose: paper")}
    if(rock.checked)
    {   user = "rock";
        console.log ("User choose: rock")}
    if(scissors.checked)
    {   user = "scissors";
        console.log("User choose: scissors")}
   
}




// Compare user and computer choise

function compare(computer, human) {

    if (computer === human) 
    {    
        return "It's a tie"
    }

    if (computer === "paper")
        {
            if(human === "rock")
            {
            return "user won"}
            else {
            return "user lost"}
    }
    if (computer === "paper")
        {
            if(human === "scissors")
            {
            return "user won"}
            else {
            return "user lost"}
    }
    if (computer === "scissors") {

            if (human === "rock"){
            return "user won"}
            else {
            return "user lost"}

    }

}

