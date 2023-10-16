let userscore = 0;
let compscore = 0;
const user_span = document.getElementById("user-score");
const comp_span = document.getElementById("comp-score");
const score_div = document.querySelector(".score");
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p");
const sis_div = document.getElementById("s")

function convert(lett) {
  if(lett==="r")return "ROCK";
  if(lett==="p")return "PAPER";
  if(lett==="s")return "SISSOR";
}
function gatComputerChoice() {
  const choices = ["r", "P", "s"];
  const random = Math.floor(Math.random() * 3);
  return choices[random];
}

function WINS(user ,comp) {
  userscore++;
  user_span.innerHTML=userscore;
  comp_span.innerHTML=compscore;
  result_p.innerHTML= convert(user) +" beats "+convert(comp)+" YOU WIN";
}
function DRAW() {
  comp_span.innerHTML=compscore;
  user_span.innerHTML=userscore;
  result_p.innerHTML= "ITS A DRAW"
}
function LOSE(user , comp) {
  compscore++;
  comp_span.innerHTML=compscore;
  user_span.innerHTML=userscore;
  result_p.innerHTML= convert(comp) +" beats "+ convert(user)+" YOU LOST"
}



function game(userChoise) {
  const ComputerChoice = gatComputerChoice();
  switch (userChoise + ComputerChoice) {
    case "rs":
    case "pr":
    case "sp":
      WINS(userChoise, ComputerChoice );
      break;
    case "rr":
    case "ss":
    case "pp":
      DRAW(userChoise, ComputerChoice);
      break;
    case "ps":
    case "sr":
    case "rp":
      LOSE(userChoise, ComputerChoice)

  }
}

function main() {
  rock_div.addEventListener('click', function () {
    game("r");
  })
  paper_div.addEventListener('click', function () {
    game("p");
  })
  sis_div.addEventListener('click', function () {
    game("s");
  })
}
main();