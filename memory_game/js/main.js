var cards = [
  {
    rank: "queen",
    suit: "hearts",
    file: "images/queen-of-hearts.png",
  },
  {
    rank: "queen",
    suit: "diamonds",
    file: "images/queen-of-diamonds.png",
  },
  {
    rank: "king",
    suit: "hearts",
    file: "images/king-of-hearts.png",
  },
  {
    rank: "king",
    suit: "diamonds",
    file: "images/king-of-diamonds.png",
  },
];
var cardsInPlay = [];

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}

function flipCard() {
  var cardId = this.getAttribute("data-id");
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].file);
  console.log(cards[cardId].suit);
  this.setAttribute("src", cards[cardId].file);
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
}

function createBoard() {
  var gameBoard = document.querySelector("#game-board");
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    gameBoard.appendChild(cardElement);
  }
}

createBoard();
