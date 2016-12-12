//Created by Jamie Van Winckel
var _2h = '2 Hearts';
var _2s = "2 Spades";
var _2d = "2 Diamonds";
var _2c = "2 Clubs";
var _3h = "3 Hearts";
var _3s = "3 Spades";
var _3d = "3 Diamonds";
var _3c = "3 Clubs";
var _4h = "4 Hearts";
var _4s = "4 Spades";
var _4d = "4 Diamonds";
var _4c = "4 Clubs";
var _5h = "5 Hearts";
var _5s = "5 Spades";
var _5d = "5 Diamonds";
var _5c = "5 Clubs";
var _6h = "5 Hearts";
var _6s = "6 Spades";
var _6d = "6 Diamonds";
var _6c = "6 Clubs";
var _7h = "7 Hearts";
var _7s = "7 Spades";
var _7d = "7 Diamonds";
var _7c = "7 Clubs";
var _8h = "8 Hearts";
var _8s = "8 Spades";
var _8d = "8 Diamonds";
var _8c = "8 Clubs";
var _9h = "9 Hearts";
var _9s = "9 Spades";
var _9d = "9 Diamonds";
var _9c = "9 Clubs";
var _10h = "10 Hearts";
var _10s = "10 Spades";
var _10d = "10 Diamonds";
var _10c = "10 Clubs";
var aceh = "Ace Hearts";
var aces = "Ace Spades";
var aced = "Ace Diamonds";
var acec = "Ace Clubs";
var jackh = "Jack Hearts";
var jacks = "Jack Spades";
var jackd = "Jack Diamonds";
var jackc = "Jack Clubs";
var queenh = "Queen Hearts";
var queens = "Queen Spades";
var queend = "Queen Diamonds";
var queenc = "Queen Clubs";
var kingh = "King Hearts";
var kings = "King Spades";
var kingd = "King Diamonds";
var kingc = "King Clubs";

function cardsToNumbers(card) {
  var cardValue;
  if (card == _2h || card == _2s || card == _2d || card == _2c) {
    cardValue = 2;
  }
  else if (card == _3h || card == _3s || card == _3d || card == _3c) {
    cardValue = 3;
  }
  else if (card == _4h || card == _4s || card == _4d || card == _4c) {
    cardValue = 4;
  }
  else if (card == _5h || card == _5s || card == _5d || card == _5c) {
    cardValue = 5;
  }
  else if (card == _6h || card == _6s || card == _6d || card == _6c) {
    cardValue = 6;
  }
  else if (card == _7h || card == _7s || card == _7d || card == _7c) {
    cardValue = 7;
  }
  else if (card == _8h || card == _8s || card == _8d || card == _8c) {
    cardValue = 8;
  }
  else if (card == _9h || card == _9s || card == _9d || card == _9c) {
    cardValue = 9;
  }
  else if (card == _10h || card == _10s || card == _10d || card == _10c) {
    cardValue = 10;
  }
  else if (card == aceh || card == aces || card == aced || card == acec) {
    cardValue = 11;
  }
  else if (card == jackh || card == jacks || card == jackd || card == jackc) {
    cardValue = 10;
  }
  else if (card == queenh || card == queens || card == queend || card == queenc) {
    cardValue = 10;
  }
  else if (card == kingh || card == kings || card == kingd || card == kingc) {
    cardValue = 10;
  }
  return cardValue;
}
