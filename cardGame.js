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
showStatus();

newGameButton.addEventListener('click', function(){
  gameStarted = true;
  gameOver = false;
  PlayerWon = false;

  deckOfCards = createDeck();
  shuffleDeck(deckOfCards);
  dealerCards = [pickNextCard(),pickNextCard()];
  playerCards = [pickNextCard(),pickNextCard()];

  newGameButton.style.display='none';
  showStatus();
  hitButton.style.display='inline';
  stayButton.style.display='inline';

});

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


  //console.log("Function pick");
 //let deckOfCards = createDeck();

function getCardString(stackCard)
{
  return (stackCard.other + " of " + stackCard.shape);

}
 /* for ( let deckIdx = 0; deckIdx < deckOfCards.length; deckIdx++ ){
  //console.log(deckOfCards);
  console.log (deckOfCards[deckIdx]);
  }
*/
function pickNextCard()
{
  return deckOfCards.shift();
}

function showStatus()
{
  if(!gameStarted){
    textArea.innerText = 'Welcome to Card Game';
    return;
  }

  for ( let i=0; i<deckOfCards.length;i++)
  {
    textArea.innerText += '\n'+getCardString(deckOfCards[i]) ;
  }
}

function shuffleDeck(deckOfCards)
{
  for (let i = 0; i<deckOfCards.length;i++)
  {

    let swapIdx = Math.trunc(Math.random()*deckOfCards.length);
    let tmp =  deckOfCards[swapIdx];
    deckOfCards[swapIdx] = deckOfCards[i];
    deckOfCards[i] = tmp;
    console.log(tmp)
  }

  //return;
}


//pickNextCard();


//let PlayerCards= [pickNextCard(),pickNextCard()];
//console.log ("You Picked"+" " +getCardString(PlayerCards[0]) );
//console.log ("You Picked"+" " +getCardString(PlayerCards[1]) );
//console.log(deckOfCards);