

//Game object constructor
const Game = function(){
    this.rounds = 0;
    this.draws = 0;
    this.resultMessage = '';
}

// Player object constructor
const Player = function(){
    this.playerChoice = '';
    this.playerPoints = 0;
}

// Function drawing an AI choice from rock, paper or scissors
Player.prototype.choiceDraw = function(){
    const choicesTable = ['rock', 'paper', 'scissors'];
    const draw = Math.floor(Math.random() * choicesTable.length);
    this.playerChoice = choicesTable[draw];
}

// Function checking who win round
const conditions = (aiChoice, humanChoice) =>{
    // Human win conditions
    if(humanChoice === 'rock' && aiChoice === 'scissors' ||
    humanChoice === 'paper' && aiChoice === 'rock' ||
    humanChoice === 'scissors' && aiChoice === 'paper'){
        board.rounds += 1;
        board.resultMessage = 'Human Wins!';
        human.playerPoints += 1;

    } 
    // Draw conditions
    else if(humanChoice === 'rock' && aiChoice === 'rock' ||
    humanChoice === 'paper' && aiChoice === 'paper' ||
    humanChoice === 'scissors' && aiChoice === 'scissors'){
        board.rounds += 1;
        board.resultMessage = 'Draw!';
        board.draws += 1;
    
    // Ai win conditions are collect in else statement 
    } else{
        board.rounds += 1;
        board.resultMessage = 'Ai Wins!';
        ai.playerPoints += 1;
    }

    // Update UI by jQ
    $('.round').text(`Rounds: ${board.rounds}`);
    $('.draws').text(`Draws: ${board.draws}`);
    $('.message').text(`${board.resultMessage}`);
    $('.playerPoints').text(`Player points: ${human.playerPoints}`);
    $('.aiPoints').text(`Ai points: ${ai.playerPoints}`);

}

// Create instances of board, human player and Ai player from 
// Game object and Player object
const board = new Game;
const human = new Player;
const ai = new Player;


//Getting which button was chosen by player and start all game features
$('button').on('click', function(){
    ai.choiceDraw();
    human.playerChoice = $(this).attr('class');
    conditions(ai.playerChoice, human.playerChoice);
    $('.playerChoice').text(`Human choice: ${human.playerChoice}`);
    $('.aiChoice').text(`Ai choice: ${ai.playerChoice}`);
})


