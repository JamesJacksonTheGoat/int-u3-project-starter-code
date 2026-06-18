// Declare variables below to save the different divs of your story.
let layupButton = document.querySelector(".option-one");
let option1Screen = document.querySelector(".option-one-screen");
let Start = document.querySelector(".story-opening");
let Choice = document.querySelector(".buttons");
let Next = document.querySelector(".next-button");
let option1end = document.querySelector(".option-one-end")

let dribbleButton = document.querySelector(".option-two");
let option2Screen = document.querySelector(".option-two-screen");
let Start2 = document.querySelector(".story-opening");
let Choice2 = document.querySelector(".buttons");
let Next2 = document.querySelector(".next-button2");
let option2end = document.querySelector(".option-two-end")






// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.

layupButton.addEventListener('click', function() {
    console.log("img")
    option1Screen.style.display = "block";
    Choice.style.display= "none";
    Start.style.display="none";
});

Next.addEventListener('click', function() {
    console.log("rig")
    option1end.style.display="block";
        option1Screen.style.display = "none";
});

dribbleButton.addEventListener('click', function() {
    console.log("big")
    option2Screen.style.display = "block";
    Choice2.style.display= "none";
    Start2.style.display="none";
});

Next2.addEventListener('click', function() {
    console.log("wig")
    option2end.style.display="block";
        option2Screen.style.display = "none";
});







// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });