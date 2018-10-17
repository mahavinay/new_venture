// Display cards in the Card Game
//Updated on 25.09.18

console.log
("Welcome to Cards Game, let us the see the cards available in the Card Game");

let cardShapes = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let otherCards = ['King', 'Queen', 'Jack', 'Ace','Ten'
                  ,'Nine', 'Eight', 'Seven', 'Six', 'Five'
                  ,'Four', 'Three', 'Two'];
//let deckOfCards = [];


//DOM Variables
let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');

// Game Variables
let gameStarted = false,
    gameOver = false,
    PlayerWon = false,
    dealerCards = [],
    playerCards = [],
    deck = [],
    dealerScore = 0,
    playerScore = 0;


hitButton.style.display = 'none';
stayButton.style.display = 'none';
//showStatus();

//New Game Button
newGameButton.addEventListener('click', function(){
  gameStarted = true;
  gameOver = false;
  playerWon = false;

  deckOfCards = createDeck();
  shuffleDeck(deckOfCards);
  dealerCards = [pickNextCard(),pickNextCard()];
  //console.log("button dealercard",dealerCards);
  playerCards = [pickNextCard(),pickNextCard()];
  //updateScores();

  newGameButton.style.display='none';
  hitButton.style.display='inline';
  stayButton.style.display='inline';
  showStatus();
});


//Hit Button
hitButton.addEventListener('click',function(){
playerCards.push(pickNextCard());
checkForEndOfGame();
showStatus();
});

//Stay Button
stayButton.addEventListener('click',function(){
  gameOver=true;
  checkForEndOfGame();
  showStatus();
});



//Deck of Cards
function createDeck(){
    let deckOfCards = [];
    for (let cardIdx = 0; cardIdx < cardShapes.length; cardIdx++){
        for (otherIdx = 0; otherIdx < otherCards.length; otherIdx++){
            let stackCard = {
                other : otherCards[otherIdx],
                shape : cardShapes[cardIdx]
            };
            deckOfCards.push(stackCard);
            //deckOfCards.push(otherCards[otherIdx] + ' of ' + cardShapes[cardIdx]);
        }
    }
    return deckOfCards;
}

//Card
function getCardString(stackCard)
{
  return (stackCard.other + " of " + stackCard.shape);

}
 /* for ( let deckIdx = 0; deckIdx < deckOfCards.length; deckIdx++ ){
  //console.log(deckOfCards);
  console.log (deckOfCards[deckIdx]);
  }
*/

//Pick Next Card
function pickNextCard()
{
  console.log("function picknextcard called");
  return deckOfCards.shift();
}

//Display Status
function showStatus()
{
  if(!gameStarted){
    textArea.innerText = 'Welcome to Card Game';
    return;
  }

  let dealerCardString = '';
  for (let i=0; i<dealerCards.length;i++){
  dealerCardString+=getCardString(dealerCards[i])+ '\n';
  }

  let playerCardString='';
  for (let i=0; i<playerCards.length;i++){
  playerCardString+=getCardString(playerCards[i])+ '\n';
  }

  updateScores();

  textArea.innerText+= '\n\n'+'Dealer Has :' + '\n' + dealerCardString +
                      'Score : ' +dealerScore+'\n\n'+

                      'Player Has :'+ '\n'+ playerCardString +
                      'Score :'+ playerScore+'\n\n';

  console.log("gameOver,playerWon", gameOver,playerWon);
  if (gameOver){
    if (playerWon){
    textArea.innerText+="YOU WIN";
    }
    else {
    textArea.innerText+="DEALER WIN";
      }

  newGameButton.style.display='inline';
  hitButton.style.display='none';
  stayButton.style.display='none';
  }

/*  for ( let i=0; i<deckOfCards.length;i++)
  {
    textArea.innerText += '\n'+getCardString(deckOfCards[i]) ;
  }*/
}

//Shuffle Card
function shuffleDeck(deckOfCards)
{
  for (let i = 0; i<deckOfCards.length;i++)
  {

    let swapIdx = Math.trunc(Math.random()*deckOfCards.length);
    let tmp =  deckOfCards[swapIdx];
    deckOfCards[swapIdx] = deckOfCards[i];
    deckOfCards[i] = tmp;
    //console.log(tmp);
  }

  //return;
}

//Update Score
function updateScores()
{
  //console.log("DEALER CARDS:",dealerCards);
  dealerScore=getScore(dealerCards);
  playerScore=getScore(playerCards);

}

function getScore(cardArray){
  let score = 0;
  let hasAce=false;
  for (let i=0; i < cardArray.length; i++){
    //console.log(cardArray[i].other);
    let card=cardArray[i].other;
    //console.log("CARD",card);
    //console.log("CARD VAL",cardVal.value);
    score+=getNumericValueCard(card);
    //console.log("SCORE","value",score,getNumericValueCard(card));
    //console.log("SCORE",score);
    if (card === 'Ace' ){
    hasAce=true;
    }
  }
  if (hasAce && score+  10  <=  21){
    return score+10;
    }
  return score;
  }


function getNumericValueCard(card)
{
  //console.log("card value",card.value)
  switch (card){
    case 'Ace':
      return 1;
    case 'Two':
      return 2;

    case 'Three':
      return 3;

    case 'Four':
      return 4;

    case 'Five':
      return 5;

    case 'Six':
      return 6;

    case 'Seven':
      return 7;

    case 'Eight':
      return 8;
    case 'Nine':
      return 9;
  default:
      return 10;

  }
}

//Check for end of Game
function checkForEndOfGame(){
  updateScores();
  console.log("Score :  ", dealerScore,playerScore );
  if (gameOver){
    //let dealer take cards
    while (dealerScore < playerScore
          && playerScore <= 21
          && dealerScore <= 21){
          dealerCards.push(pickNextCard());
          updateScores();
          console.log("After dealer takes the card",playerScore,dealerScore);
          }
    }


  if (playerScore > 21){
    playerWon = false;
    gameOver = true;
    }

    else if (dealerScore > 21){
      playerWon = true;
      gameOver = true;
    }

    else if (gameOver){

       if (playerScore > dealerScore){
         playerWon=true;
       }
         else {
           playerWon = false;

         }
    }
    }



