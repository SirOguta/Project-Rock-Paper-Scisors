
const options =["rock" ,"paper" ,"scissors"];
 function getComputerChoice(){
    const  choice = options[Math.floor(Math.random()*options.length)];
    return choice;
 }
 function checkWinner(playerSelection,computerChoice){
    if(playerSelection ==computerChoice){
        return "Tie";
    }
    else if (( playerSelection == "rock" && computerChoice =="scissors") ||
          (playerSelection == "scissors" && computerChoice == "paper") ||
          (playerSelection == "paper" && computerChoice =="rock"))
    {
   return "Player";
    }
    else{
        return "Computer";
    }
 }
 function playRound(playerSelection,computerChoice){
  const result=checkWinner(playerSelection,computerChoice);
  if(result=="Tie"){
    return "It's a tie!";
  }
  else if(result=="Player"){
    return ` You win! ${playerSelection} beats ${computerChoice}`;
  }
  else{
    return `You loose ! ${computerChoice} beats ${playerSelection}`;
  }
 }
 function getPlayerChoice(){
    let validatedInput = false;
    while (validatedInput == false){
        const choice=prompt(" Rock ,paper or scissors");
        if (choice==null){
            continue;
        }
        const choiceInLower=choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput= true;
            return choiceInLower;
        }
    }

 }
 function game(){
    let scorePlayer=0;
    let scoreComputer=0;
    console.log("Welcome!");
    for(let i=0;i<5;i++){
    const playerSelection=getPlayerChoice();
    const computerChoice=getComputerChoice();
    console.log(playRound(playerSelection,computerChoice));
    console.log("---------");
    if((checkWinner(playerSelection,computerChoice)=="Player")){
        scorePlayer++;
    } else if((checkWinner(playerSelection,computerChoice)) =="Computer"){
        scoreComputer++;
    }
    }
    console.log("Game Over")
    if(scorePlayer>scoreComputer){
        console.log("Player was the winner");
    }
    else if (scorePlayer<scoreComputer){
        console.log("Computer was the winner");
    }
    else{
        console.log("We have a tie");
    }
 }
game()