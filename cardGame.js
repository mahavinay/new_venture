// Cards Game
//Updated on 01.10.18

console.log
("Welcome to Cards Game, let us the see the cards available in the Card Game");

let cardShapes = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let otherCards = ['King', 'Queen', 'Jack', 'Ace','Ten'
                  ,'Nine', 'Eight', 'Seven', 'Six', 'Five'
                  ,'Four', 'Three', 'Two'];
//let deckOfCards = [];

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