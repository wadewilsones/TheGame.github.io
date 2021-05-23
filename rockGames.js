// Name script 

let name = document.getElementById('name_input');
let sub_btn = document.getElementById("name_sbt");
let greeting = document.getElementById("greeting");
let greet = document.getElementById("nameCheck");

let sectionOne = document.querySelector(".name_confirmation_section");
let sectionTwo = document.querySelector(".secondScreen");


sub_btn.addEventListener('click', function(event){
    event.preventDefault()
    if (name.value !="") 
    {
    greeting.innerHTML = "Alright, let's play " + name.value + "!"; 
    greet.innerHTML = "Please, choose one of the following:"
    sectionTwo.removeAttribute('class','secondScreen');
    sectionOne.removeAttribute('class','name_confirmation_section');
    sectionOne.setAttribute('class','name_confirmation_section_remove');
    }
    else {
    greet.innerHTML = "Aww, you need to type your name, dear!".bold();
    }
})




// Declare variables for DOM elements

let paper = document.getElementById('paper');
let rock = document.getElementById('rock');
let scissors = document.getElementById('scissors');
let subbutton = document.getElementById('submitB');
let results = document.getElementById ("results");

subbutton.addEventListener ('click', function Start(){

//Create random choise option for the computer.

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
    let newresults = compare(compChoice, user);
    console.log("Result is " + compare(compChoice, user))
    results.innerHTML = compare(compChoice, user);
        
    })


//Create function for human choise.

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

// Compare function for  user and computer choise

function compare(computer, human) {

    if (computer === human) 
    {    
        return "It's a tie"
    }

    if (computer === "rock")
        {
            if(human === "paper")
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



