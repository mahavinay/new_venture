// Display cards in the Card Game
//Updated on 25.09.18

console.log
("Welcome to Cards Game, let us the see the cards available in the Card Game");

let cardShapes = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let otherCards = ['King', 'Queen', 'Jack', 'Ace','Ten'
                  ,'Nine', 'Eight', 'Seven', 'Six', 'Five'
                  ,'Four', 'Three', 'Two'];
//let deckOfCards = [];

let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');

hitButton.style.display = 'none';
stayButton.style.display = 'none';

newGameButton.addEventListener('click', function(){
  textArea.innerText = 'Game Started';
  newGameButton.style.display='none';
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
  let deckOfCards = createDeck();

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

//pickNextCard();


let PlayerCards= [pickNextCard(),pickNextCard()];
console.log ("You Picked"+" " +getCardString(PlayerCards[0]) );
console.log ("You Picked"+" " +getCardString(PlayerCards[1]) );
//console.log(deckOfCards);