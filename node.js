const userscore = 0;
const compscore = 0;
const user_span = document.getElementById("user");
const comp_span = document.getElementById("comp");
const score_div = document.querySelector(".score");
const result_div = document.querySelector(".result")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p");
const sis_div=document.getElementById("s")

function gatComputerChoice() {
    const choices =["r","P","s"];
const random= Math.floor(Math.random()*3);
return choices[random];
}



function game(userChoise) {
const ComputerChoice =gatComputerChoice();
switch (userChoise+ComputerChoice) {
    case "rs":
        case "pr":
            case "sp":    
            console.log("USER WINS");
            break;
    case"rr":
    case "ss":
        case"pp":
        console.log("DRAW");
        break;
     case "ps":
        case "sr":
        case "rp":
            console.log("COMP WINs");       

}
}

function main(){
 rock_div.addEventListener('click', function() {
   game("r");
 })
 paper_div.addEventListener('click', function() {
   game("p");
 })
 sis_div.addEventListener('click', function() {
    game("s");
 })
}
main();