// Display cards in the Card Game
//Updated on 25.09.18

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
            deckOfCards.push(otherCards[otherIdx] + ' of ' + cardShapes[cardIdx]);
            }
    }
    return deckOfCards;

}


  //console.log("Function pick");
  let deckOfCards = createDeck();

  for ( let deckIdx = 0; deckIdx < deckOfCards.length; deckIdx++ ){
  //console.log(deckOfCards);
  console.log (deckOfCards[deckIdx]);
  }

function pickNextCard()
{
  return deckOfCards.shift();
}

//pickNextCard();


let PlayerCards= [pickNextCard(),pickNextCard()];
console.log ("You Picked"+" " +PlayerCards[0] );
console.log ("You Picked"+" " +PlayerCards[1] );
//console.log(deckOfCards);