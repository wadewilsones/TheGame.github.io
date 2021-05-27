// Name script 

let name = document.getElementById('name_input');
let sub_btn = document.getElementById("name_sbt");
let greeting = document.getElementById("greeting");
let nameCheck = document.getElementById("nameCheck");

let imgConsole = document.querySelector(".console_pic");
let header = document.querySelector("h1");
let sectionOne = document.querySelector(".name_confirmation_section");
let sectionTwo = document.querySelector(".secondScreen");


sub_btn.addEventListener('click', function(event){
    event.preventDefault()
    if (name.value !=""  && name.value.length > 3) 
    {
    greeting.innerHTML = "Alright, let's play " + name.value + "!"; 
    greeting.style.cssText = "padding-top:20%" 
    greeting.style.pointerEvents = "none"; // Removed hover pseudoclass
    nameCheck.innerHTML = "Please, choose one of the following:";

    imgConsole.removeAttribute('class','console_pic');
    imgConsole.setAttribute('class','console_pic_remove');

    sectionTwo.removeAttribute('class','secondScreen');
    sectionTwo.setAttribute('class','secondScreenDisplay');
    sectionOne.removeAttribute('class','name_confirmation_section');
    sectionOne.setAttribute('class','name_confirmation_section_remove');
    }
    else {
    nameCheck.innerHTML = "Aww, you need to type your name, dear!".bold();
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

    console.log("Result is " + compare(compChoice, user));
    subbutton.value = "Try again!"
    header.style.cssText = "display:none";
    nameCheck.style.cssText = "display:none";    
    results.innerHTML = compare(compChoice, user);
    results.style.cssText = "font-size:64px; text-align:center; padding-top:20%; padding-bottom:2%";    
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
        let tie = "tie!"
        return "It's a " + tie
    }

    if (computer === "rock")
        {
            if(human === "paper")
            {
            return "Aww, you won!"}
            else {
            return "Hooray, I won!"}
    }
    if (computer === "paper")
        {
            if(human === "scissors")
            {
                return "Aww, you won!"}
            else {
                return "Hooray, I won!"}
    }
    if (computer === "scissors") {

            if (human === "rock"){
                return "Aww, you won!"}
            else {
                return "Hooray, I won!"}

    }

}



