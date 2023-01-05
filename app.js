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
var bot_guessing = document.getElementById("bot_guessing");


var paperimg = document.getElementById("paperimg");
var rockimg = document.getElementById("rockimg");
var scissorimg = document.getElementById("scissorimg");
var bpaperimg = document.getElementById("bpaperimg");
var brockimg = document.getElementById("brockimg");
var bscissorimg = document.getElementById("bscissorimg");



var player_picked = "";
var bot_picked = "";

var pscore = 0;
var bscore = 0;
var round = 1;







////directly executing code
user_name_input.addEventListener("input", function () {
    player_name_span.innerHTML = user_name_input.value;
    player_name_h2.innerHTML = user_name_input.value;
});
round_max_input.addEventListener("input", function () {
    round_max_span.innerHTML = round_max_input.value;
});

rock.addEventListener("click", function () {
    Player_guessing.style.display = "none";
    player_picked = "r";
    paperimg.style.display = "none";
    rockimg.style.display = "inline";
    scissorimg.style.display = "none";
    document.getElementById("fight_button").style.pointerEvents= "all";
    document.getElementById("fight_button").style.opacity= "1";
    document.getElementById("mini_ins").innerHTML= "Click on 'Fight' button to play ";

})
paper.addEventListener("click", function () {
    Player_guessing.style.display = "none";
    player_picked = "p";
    paperimg.style.display = "inline";
    rockimg.style.display = "none";
    scissorimg.style.display = "none";
    document.getElementById("fight_button").style.pointerEvents= "all";
    document.getElementById("fight_button").style.opacity= "1";
    document.getElementById("mini_ins").innerHTML= "Click on 'Fight' button to play ";

})
scissor.addEventListener("click", function () {
    Player_guessing.style.display = "none";
    player_picked = "s";
    paperimg.style.display = "none";
    rockimg.style.display = "none";
    scissorimg.style.display = "inline";
    document.getElementById("fight_button").style.pointerEvents= "all";
    document.getElementById("fight_button").style.opacity= "1";
    document.getElementById("mini_ins").innerHTML= "Click on 'Fight' button to play ";

})

/// randomly picking function


function draw() {


    
    let x = Math.floor((Math.random() * 100) + 1);

    if (x % 3 == 0) {
        bot_guessing.style.display = "none";
        bot_picked = "r";
        bpaperimg.style.display = "none";
        brockimg.style.display = "inline";
        bscissorimg.style.display = "none";
    }

    else if (x % 3 == 2) {
        bot_guessing.style.display = "none";
        bot_picked = "p";
        bpaperimg.style.display = "inline";
        brockimg.style.display = "none";
        bscissorimg.style.display = "none";
    }
    else {
        bot_guessing.style.display = "none";
        bot_picked = "s";
        bpaperimg.style.display = "none";
        brockimg.style.display = "none";
        bscissorimg.style.display = "inline";
    }

    if ((bot_picked == "r" && player_picked == "r") ||
        (bot_picked == "p" && player_picked == "p") ||
        (bot_picked == "s" && player_picked == "s") 
    ){
       setTimeout(tie_text,300);
       round = round + 1;
       document.getElementById("round_count").innerHTML = round;
       setTimeout(resest_controls, 1500);

    }
    else if ((bot_picked == "r" && player_picked == "p") ||
        (bot_picked == "p" && player_picked == "s") ||
        (bot_picked == "s" && player_picked == "r") 
    ){
       setTimeout(player_won_text,300);
       pscore = pscore + 1;
       document.getElementById("player_score").innerHTML = pscore;
       popup_p();
       setTimeout(popdown_p, 300);
       round = round + 1;
       document.getElementById("round_count").innerHTML = round;
       
       setTimeout(resest_controls, 1500);

    }
    else if ((bot_picked == "r" && player_picked == "s") ||
        (bot_picked == "p" && player_picked == "r") ||
        (bot_picked == "s" && player_picked == "p") 
    ){
       setTimeout(bot_won_text,300);
       bscore = bscore + 1;
       document.getElementById("bot_score").innerHTML = bscore;
       popup();
       setTimeout(popdown, 300);
       round = round + 1;
       document.getElementById("round_count").innerHTML = round;
       setTimeout(resest_controls, 1500);

    }

    if (round > round_max_input.value){
        setTimeout(open_final, 1500);
    }

}



function resest_controls(){

    document.getElementById("fight_button").style.pointerEvents= "none";
    document.getElementById("fight_button").style.opacity= "var(--opacity)";
    document.getElementById("mini_ins").innerHTML= "Choose an option ";
    paperimg.style.display = "none";
    rockimg.style.display = "none";
    scissorimg.style.display = "none";
    Player_guessing.style.display = "inline";
    bot_guessing.style.display = "inline";
    bpaperimg.style.display = "none";
    brockimg.style.display = "none";
    bscissorimg.style.display = "none";
    clear_text();


}



function popup(){
    document.getElementById("bot_score").style.fontSize ="50px";
}
function popdown(){
    document.getElementById("bot_score").style.fontSize ="24px";
}
function popup_p(){
    document.getElementById("player_score").style.fontSize ="50px";
}
function popdown_p(){
    document.getElementById("player_score").style.fontSize ="24px";
}








// starting_inputs navigation


function close_StartingInput() {
    var StartingInput = document.getElementById("starting_inputs");
    StartingInput.style.transform = "translateX(10000px)";
}
function open_StartingInput() {
    var StartingInput = document.getElementById("starting_inputs");
    StartingInput.style.transform = "translateX(0px)";
}
// instructions navigation


function close_instructions() {
    var StartingInput = document.getElementById("instructions");
    StartingInput.style.transform = "translateX(10000px)";
}
function open_instructions() {
    var StartingInput = document.getElementById("instructions");
    StartingInput.style.transform = "translateX(0px)";
}
// main_screen navigation



function open_final() {
    document.getElementById("final_screen").style.transform = "translateX(0px)";

    if (pscore < bscore){
        document.getElementById("lastmssg").innerHTML = "Better luck <br> next time";
        document.getElementById("lastmssg2").innerHTML = "You lost the game";
    }
    else if (pscore == bscore){
        document.getElementById("lastmssg").innerHTML = "You gave a <br> tough competiiton";
        document.getElementById("lastmssg2").innerHTML = "Game ended up in a Tie";
    }
}
// final_screen navigation


function close_main() {
    document.getElementById("main");
    StartingInput.style.transform = "translateX(10000px)";
}
function open_main() {
    var StartingInput = document.getElementById("main");
    StartingInput.style.transform = "translateX(0px)";
}



// functions for text pop ups


function rock_text() {
    text_box.innerHTML = "ROCK";
    text_box.style.color= "var(--black)";
    text_box.style.background=" transparent";
}
function paper_text() {
    text_box.style.transform = "scale(1.5)";
    text_box.innerHTML = "PAPER";
}
function scissor_text() {
    text_box.style.transform = "scale(2)";
    text_box.innerHTML = "SCISSORS!";
}
function clear_text() {
    text_box.style.transform = "scale(1)";
    text_box.innerHTML = "";
    text_box.style.background=" transparent";
    
}
function bot_won_text() {
    text_box.innerHTML = "BOT Wins this round";
    text_box.style.color= "var(--yellow)";
    text_box.style.background=" var(--black)";
    setTimeout(clear_text, 1500);

}
function player_won_text() {
    text_box.innerHTML = " you won this round";
    text_box.style.color= "var(--yellow)";
    text_box.style.background=" var(--black)";
    setTimeout(clear_text, 1500);

}
function tie_text() {
    text_box.innerHTML = " It`s been a tie";
    text_box.style.color= "var(--yellow)";
    text_box.style.background=" var(--black)";
}

function RPS_text() {
    rock_text();
    setTimeout(paper_text, 500);
    setTimeout(scissor_text, 1000);
    setTimeout(clear_text, 1500);
    setTimeout(draw, 1600);

}