var text_box = document.getElementById("time_count");
var user_name_input = document.getElementById("UserName");
var player_name_span = document.getElementById("player_name_span");
var player_name_h2 = document.getElementById("player_name_h2");
var round_max_input = document.getElementById("rounds");
var round_max_span = document.getElementById("round_max");
var rock = document.getElementById("option1");
var paper = document.getElementById("option2");
var scissor = document.getElementById("option3");
var Player_guessing = document.getElementById("Player_guessing");
var Player_picked_img = document.getElementById("Player_picked");


var p_rock =document.getElementById("p_rock");



var player_picked = "";







////directly executing code
user_name_input.addEventListener("input", function() {
    player_name_span.innerHTML =user_name_input.value;
    player_name_h2.innerHTML =user_name_input.value;
  });
round_max_input.addEventListener("input", function() {
    round_max_span.innerHTML =round_max_input.value;
  });

  rock.addEventListener("click",function(){
    Player_guessing.style.display = "none";
    player_picked = "r";
    p_rock.style.display="inline";
    console.log("rock");
  })





  paper.addEventListener("click",function(){
    Player_guessing.style.display = "inline";
    player_picked = "p";
    console.log("paper");
  })
  scissor.addEventListener("click",function(){
    Player_guessing.style.display = "none";
    player_picked = "s";
    console.log("scissors");
  })













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