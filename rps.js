// Initialize players and variables
var player1 = 'Bernice';
var player1Choice = null;
var player1Wins = 0;

var player2 = 'Sam';
var player2Choice = null;
var player2Wins = 0;

var round = 0;
var errorCount = 0;
var weapons = ['rock' , 'paper', 'scissors'];

// Show welcome
console.log("-------------------");
console.log("Welcome to the Rock, Paper Scissors Championship.");
console.log("Player 1 is " + player1 + ", and Player 2 is " + player2 + ".");
console.log("Begin!");
console.log("-------------------");

// Run the battle!
while (player1Wins < 3 && player2Wins < 3 && errorCount < 999) {
  player1Choice = weapons[parseInt(Math.random()*weapons.length) %3];
  player2Choice = weapons[parseInt(Math.random()*weapons.length) %3];
  round++; // advance the round
  errorCount++; // save us from going past 999 rounds!

  console.log(player1 + " chooses " + player1Choice);
  console.log(player2 + " chooses " + player2Choice);

  switch (player1Choice) {
    case "rock":
      switch (player2Choice) {
        case "rock":
          console.log(" ~ Tie for round " + round + "!");
          break;
        case "paper":
          player2Wins++;
          console.log(" ~ " + player2 + " wins round " + round + "!");
          break;
        case "scissors":
          player1Wins++;
          console.log(" ~ " + player1 + " wins round " + round + "!");
          break;
        default:
          continue;
      }
      break;

    case "paper":
      switch (player2Choice) {
        case "rock":
          player1Wins++;
          console.log(" ~ " + player1 + " wins round " + round + "!");
          break;
        case "paper":
        console.log(" ~ Tie for round " + round + "!");
          break;
        case "scissors":
          player2Wins++;
          console.log(" ~ " + player2 + " wins round " + round + "!");
          break;
        default:
          continue;
      }
      break;

    case "scissors":
      switch (player2Choice) {
        case "rock":
          player2Wins++;
          console.log(" ~ " + player2 + " wins round " + round + "!");
          break;
        case "paper":
          player1Wins++;
          console.log(" ~ " + player1 + " wins round " + round + "!");
          break;
        case "scissors":
          console.log(" ~ Tie for round " + round + "!");
          break;
        default:
          continue;
      }
      break;

    default:
      continue;
  }
}

// Announce the winner
console.log("-------------------");
if (player1Wins >= 3) {
  console.log(player1 + " wins in " + round + " rounds!");
} else if (player2Wins >= 3) {
  console.log(player2 + " wins in " + round + " rounds!");
} else {
  console.log("Due to an amazingly improbable amount of ties, no one wins.")
}
console.log("-------------------");
