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
    event.preventDefault();
    //Name validation 
    if (name.value !="" && name.value.length > 3) 
    {

    greeting.innerHTML = "Let's play " + "<span style = 'color:#FF9811'>" + name.value + "<span>" + "!"; 
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
    results.style.cssText = "font-size:64px; text-align:center; padding-top:20%; line-height:1";


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
        return "It's a " + "<span style = 'color:#FF9811'>" + "tie" + "<span/>" + "!"
        + "<br>" + "<span style = 'color:black; font-size:14px; font-weight:500'>" + "Let's try again!"
    }

    if (computer === "rock")
        {
            if(human === "paper")
            {
            return "Aww, " + "<span style = 'color:#FF9811'>" + "you won" + "<span/>" +  "!"
            + "<br>" + "<span style = 'color:black; font-size:14px; font-weight:500'>" + "Let's try again!"}

            else {
            return "Hooray, " + "<span style = 'color:#FF9811'>" + "I won" + "<span/>" + "!"
            + "<br>" + "<span style = 'color:black; font-size:14px;font-weight:500''>" + "Don’t worry. We can try again!"}
        }
    if (computer === "paper")
        {
            if(human === "scissors")
            {
                return "Aww, " + "<span style = color:#FF9811>" + "you won" + "<span/>" + "!"
                + "<br>" + "<span style = 'color:black; font-size:14px; font-weight:500'>" + "Let's try again!"}
               
            else {
                return "Hooray, " + "<span style = 'color:#FF9811'>" + "I won" + "<span/>" + "!"
                + "<br>" + "<span style = 'color:black; font-size:14px;font-weight:500''>" + "Don’t worry. We can try again!"}
    }
    if (computer === "scissors") {

            if (human === "rock"){
                return "Aww, " + "<span style = color:#FF9811>" + "you won" + "<span/>" + "!"
                + "<br>" + "<span style = 'color:black; font-size:14px; font-weight:500'>" + "Let's try again!"}
            else {
                return "Hooray, " + "<span style = 'color:#FF9811'>" + "I won" + "<span/>" + "!"
                + "<br>" + "<span style = 'color:black; font-size:14px;font-weight:500''>" + "Don’t worry. We can try again!"}}
        
            }          })


            //Create a back-button  

            let backBtn = document.createElement('button');
            backBtn.innerHTML = "<img src = 'media/back.png' width = 30px height = 26px style = 'padding-top:15px; cursor: pointer;'>"
            backBtn.setAttribute('class', 'but');
            let buttonContainer = document.querySelector('.buttons-for-back');
            buttonContainer.appendChild(backBtn);


            //Go back screen 

            backBtn.addEventListener ('click', function (event){

                event.preventDefault
                window.location.reload()

            })