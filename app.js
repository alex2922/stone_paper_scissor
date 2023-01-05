var text_box = document.getElementById("time_count");
var user_name_input = document.getElementById("UserName");
var player_name_span = document.getElementById("player_name_span");
var round_max_input = document.getElementById("rounds");
var round_max_span = document.getElementById("round_max");







////directly executing code
user_name_input.addEventListener("input", function() {
    player_name_span.innerHTML =user_name_input.value;
  });
round_max_input.addEventListener("input", function() {
    round_max_span.innerHTML =round_max_input.value;
  });








// starting_inputs navigation


function close_StartingInput(){
    var StartingInput = document.getElementById("starting_inputs");
    StartingInput.style.transform="translateX(10000px)";
}
function open_StartingInput(){
    var StartingInput = document.getElementById("starting_inputs");
    StartingInput.style.transform="translateX(0px)";
}
// instructions navigation


function close_instructions(){
    var StartingInput = document.getElementById("instructions");
    StartingInput.style.transform="translateX(10000px)";
}
function open_instructions(){
    var StartingInput = document.getElementById("instructions");
    StartingInput.style.transform="translateX(0px)";
}
// main_screen navigation


function close_main(){
    var StartingInput = document.getElementById("main");
    StartingInput.style.transform="translateX(10000px)";
}
function open_main(){
    var StartingInput = document.getElementById("main");
    StartingInput.style.transform="translateX(0px)";
}



// functions for text pop ups


function rock_text(){
    text_box.innerHTML = "ROCK";   
}
function paper_text(){
    text_box.style.transform="scale(1.5)";
    text_box.innerHTML = "PAPER";   
}
function scissor_text(){
    text_box.style.transform="scale(2)";
    text_box.innerHTML = "SCISSORS!";   
}
function clear_text(){
    text_box.style.transform="scale(1)";
    text_box.innerHTML = "";  
}
function bot_won_text(){
    text_box.innerHTML = "BOT Wins this round";  
}
function player_won_text(){
    text_box.innerHTML = " you won this round";  
}

function RPS_text(){
    rock_text();
    setTimeout(paper_text, 500);
    setTimeout(scissor_text, 1000);
    setTimeout(clear_text, 1500)
}