const btnDiceRoll   = document.getElementById("btnRollDice");
const btnNewGame    = document.getElementById("btnNewGame");
const dice1         = document.getElementById("playerR1Di1");
const dice2         = document.getElementById("playerR1Di2");
const dice3         = document.getElementById("oppR1Di1");
const dice4         = document.getElementById("oppR1Di2");
const dice5         = document.getElementById("playerR2Di1");
const dice6         = document.getElementById("playerR2Di2");
const dice7         = document.getElementById("oppR2Di1");
const dice8         = document.getElementById("oppR2Di2");
const dice9         = document.getElementById("playerR3Di1");
const dice10        = document.getElementById("playerR3Di2");
const dice11        = document.getElementById("oppR3Di1");
const dice12        = document.getElementById("oppR3Di2");
const rndScore1     = document.getElementById("score1");
const rndScore2     = document.getElementById("score2");
const rndScore3     = document.getElementById("score3");
const playerTotal   = document.getElementById("playerTotal");
const oppTotal      = document.getElementById("oppTotal");
const gameWinner    = document.getElementById("gameWinner");
const playerBox     = document.getElementById("playerBox");
const oppBox        = document.getElementById("playerBox");

const $round1           =$('.round1');
//control boxes css 
const $round1Num        = $('.round1Num');
const $round2Num        = $('.round2Num');
const $round3Num        = $('.round3Num');
const $totalScore       = $('.totalScore');
const $playerTotalBox   = $('.playerTotalBox');
const $oppTotalBox      = $('.oppTotalBox');
const $resultBox        =$('.result');

//control dice visibility
const $playerRound1     = $('#player_game_round1');
const $oppRound1        = $('#opp_game_round1');
const $playerRound2     = $('#player_game_round2');
const $oppRound2        = $('#opp_game_round2');
const $playerRound3     = $('#player_game_round3');
const $oppRound3        = $('#opp_game_round3');

let round = 0;
let diceNumbers = 6;

let rndDiceValue1 = 0;
let rndDiceValue2 = 0;
let rndDiceValue3 = 0;
let rndDiceValue4 = 0;

let playerR1Score = 0;
let playerR2Score = 0;
let playerR3Score = 0;
let oppR1Score = 0;
let oppR2Score = 0;
let oppR3Score = 0;
let totalPlayerScore = 0;
let totalOppScore = 0;

//Dice fading
let defaultFadeOut = 1000;
let defaultFadeIn = 500;

$playerRound1.fadeTo(defaultFadeOut,0);
$oppRound1.fadeTo(defaultFadeOut,0);
$playerRound2.fadeTo(defaultFadeOut,0);
$oppRound2.fadeTo(defaultFadeOut,0);
$playerRound3.fadeTo(defaultFadeOut,0);
$oppRound3.fadeTo(defaultFadeOut,0);

//game round fading to show which round is active
$round1Num.css('border-color','red');
$round1Num.css('border-width','5px');

//refresh page for new game
btnNewGame.addEventListener('click', function(){
    window.location.reload();
})

btnDiceRoll.addEventListener('click', function(){
    round ++;

    if(round < 4){
        rndDiceValue1 = Math.floor(Math.random() * diceNumbers + 1);
        rndDiceValue2 = Math.floor(Math.random() * diceNumbers + 1);
        rndDiceValue3 = Math.floor(Math.random() * diceNumbers + 1);
        rndDiceValue4 = Math.floor(Math.random() * diceNumbers + 1);

 //       console.log(`${rndDiceValue1}, ${rndDiceValue2},${rndDiceValue3}, ${rndDiceValue4}`)
 
        //call function to change images based on random numbers drawn
        updateImages(rndDiceValue1,rndDiceValue2,rndDiceValue3,rndDiceValue4,round)

        // call function to keep tally of the game scores
        updateScore(rndDiceValue1,rndDiceValue2,rndDiceValue3,rndDiceValue4,round)
    }
})

function updateImages(rndDiceValue1,rndDiceValue2,rndDiceValue3,rndDiceValue4,round){
    let image1 = rndDiceValue1;
    let image2 = rndDiceValue2;
    let image3 = rndDiceValue3;
    let image4 = rndDiceValue4;
    let roundNum = round;
 //   console.log(roundNum)
    if (roundNum == 1){
        dice1.src = `images/${image1}.jpg`;
        dice2.src = `images/${image2}.jpg`;
        dice3.src = `images/${image3}.jpg`;
        dice4.src = `images/${image4}.jpg`;
     //animation of dice
        $playerRound1.fadeTo(defaultFadeIn,1);
        $oppRound1.fadeTo(defaultFadeIn, 1);
        $round1Num.css('border-color','black');
        $round1Num.css('border-width','1px');
        $round2Num.css('border-color','red');
        $round2Num.css('border-width','5px');
    }
    else if (roundNum == 2){
        dice5.src = `images/${image1}.jpg`;
        dice6.src = `images/${image2}.jpg`;
        dice7.src = `images/${image3}.jpg`;
        dice8.src = `images/${image4}.jpg`;
        //animation of dice
        $playerRound2.fadeTo(defaultFadeIn,1);
        $oppRound2.fadeTo(defaultFadeIn, 1);
        $round2Num.css('border-color','black');
        $round2Num.css('border-width','1px');
        $round3Num.css('border-color','red');
        $round3Num.css('border-width','5px');
    }
    else if (roundNum == 3){
        dice9.src = `images/${image1}.jpg`;
        dice10.src = `images/${image2}.jpg`;
        dice11.src = `images/${image3}.jpg`;
        dice12.src = `images/${image4}.jpg`;
        //animation of dice
        $playerRound3.fadeTo(defaultFadeIn,1);
        $oppRound3.fadeTo(defaultFadeIn, 1);
        $round3Num.css('border-color','black');
        $round3Num.css('border-width','1px');
        $totalScore.css('border-color','red');
        $totalScore.css('border-width','5px');
    }
}

function updateScore(rndDiceValue1,rndDiceValue2,rndDiceValue3,rndDiceValue4,round){
    let score1 = rndDiceValue1;
    let score2 = rndDiceValue2;
    let score3 = rndDiceValue3;
    let score4 = rndDiceValue4;
    let roundNum = round;

    //calculate round totals
    if (roundNum == 1 ){
        //player
        if (score1 == 1 || score2 == 1){
            playerR1Score = 0;
        }else if(score1 == score2){
            playerR1Score = (score1 + score2) * 2;
        }
        else{
            playerR1Score = (score1 + score2)
        }
        //opponent
        if (score3 == 1 || score4 == 1){
            oppR1Score = 0;
        }else if(score3 == score4){
            oppR1Score = (score3 + score4) * 2;
        }
        else{
            oppR1Score = (score3 + score4);
        } 
        totalPlayerScore += playerR1Score;
        totalOppScore += oppR1Score;
        rndScore1.innerHTML = `<p>${playerR1Score}  :  ${oppR1Score}</p> `;
        //color Total boxes depending on who is leading
        if (totalPlayerScore > totalOppScore){
            $playerTotalBox.css('border-color','red');
            $playerTotalBox.css('border-width','5px');
            $oppTotalBox.css('border-color','black');
            $oppTotalBox.css('border-width','1px');
        }else if(totalPlayerScore < totalOppScore){
            $oppTotalBox.css('border-color','red');
            $oppTotalBox.css('border-width','5px');
            $playerTotalBox.css('border-color','black');
            $playerTotalBox.css('border-width','1px');
        }else{
            $playerTotalBox.css('border-color','red');
            $playerTotalBox.css('border-width','5px');
            $oppTotalBox.css('border-color','red');
            $oppTotalBox.css('border-width','5px');
        }

    }
    if (roundNum == 2 ){
        //player
        if (score1 == 1 || score2 == 1){
            playerR2Score = 0;
        }else if(score1 == score2){
            playerR2Score = (score1 + score2) * 2;
        }
        else{
            playerR2Score = (score1 + score2)
        }
        //opponent
        if (score3 == 1 || score4 == 1){
            oppR2Score = 0;
        }else if(score3 == score4){
            oppR2Score = (score3 + score4) * 2;
        }
        else{
            oppR2Score = (score3 + score4);
        } 
        totalPlayerScore += playerR2Score;
        totalOppScore += oppR2Score;
        rndScore2.innerHTML = `<p>${playerR2Score}  :  ${oppR2Score}</p> `;

        //color Total boxes depending on who is leading
        if (totalPlayerScore > totalOppScore){
            $playerTotalBox.css('border-color','red');
            $playerTotalBox.css('border-width','5px');
            $oppTotalBox.css('border-color','black');
            $oppTotalBox.css('border-width','1px');
        }else if(totalPlayerScore < totalOppScore){
            $oppTotalBox.css('border-color','red');
            $oppTotalBox.css('border-width','5px');
            $playerTotalBox.css('border-color','black');
            $playerTotalBox.css('border-width','1px');
        }else{
            $playerTotalBox.css('border-color','red');
            $playerTotalBox.css('border-width','5px');
            $oppTotalBox.css('border-color','red');
            $oppTotalBox.css('border-width','5px');
        }
    }    
    if (roundNum == 3 ){
        btnDiceRoll.textContent = "GAME OVER"
        //player
        if (score1 == 1 || score2 == 1){
            playerR3Score = 0;
        }else if(score1 == score2){
            playerR3Score = (score1 + score2) * 2;
        }
        else{
            playerR3Score = (score1 + score2)
        }
        //opponent
        if (score3 == 1 || score4 == 1){
            oppR3Score = 0;
        }else if(score3 == score4){
            oppR3Score = (score3 + score4) * 2;
        }
        else{
            oppR3Score = (score3 + score4);
        } 

        totalPlayerScore += playerR3Score;
        totalOppScore += oppR3Score;
        rndScore3.innerHTML = `<p>${playerR3Score}  :  ${oppR3Score}</p> `;
        $resultBox.css('border-color','red');
        $resultBox.css('border-width','5px');
        //color Total boxes depending on who is leading
        if (totalPlayerScore > totalOppScore){
            $playerTotalBox.css('border-color','red');
            $playerTotalBox.css('border-width','5px');
            $oppTotalBox.css('border-color','black');
            $oppTotalBox.css('border-width','1px');
        }else if(totalPlayerScore < totalOppScore){
            $oppTotalBox.css('border-color','red');
            $oppTotalBox.css('border-width','5px');
            $playerTotalBox.css('border-color','black');
            $playerTotalBox.css('border-width','1px');
        }else{
            $playerTotalBox.css('border-color','red');
            $playerTotalBox.css('border-width','5px');
            $oppTotalBox.css('border-color','red');
            $oppTotalBox.css('border-width','5px');
        }
    //identify winner
        if (totalPlayerScore == totalOppScore){
            gameWinner.innerHTML = `<h3>TIE !</h3>`;
        }
        else if(totalPlayerScore > totalOppScore){
            gameWinner.innerHTML = `<h3>PLAYER WINS !</h3>`;
        }
        else{
            gameWinner.innerHTML = `<h3>OPPONENT WINS !</h3>`;
        }
        btnDiceRoll.backgroundColor = "grey"
    }
    playerTotal.innerHTML = `<p>${totalPlayerScore}</p>`;
    oppTotal.innerHTML = `<p>${totalOppScore}</p>`;
//console.log(`round 1: player = ${playerR1Score} and opp = ${oppR1Score}`);
//console.log(`round 2: player = ${playerR2Score} and opp = ${oppR2Score}`);
//console.log(`round 3: player = ${playerR3Score} and opp = ${oppR3Score}`);
//console.log(`total player= ${totalPlayerScore} and total opp = ${totalOppScore}`)
}