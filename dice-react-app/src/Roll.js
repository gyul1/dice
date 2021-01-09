function rollDie() {
    return  Math.floor(Math.random() * 6) + 1;   // returns a random number from 1-6
  }

var NUMBERS_ROLLED = []


function getLast10Rolled() {
  return NUMBERS_ROLLED.slice(-10);
}

export default function rollDice() {
    var first = rollDie();
    var second = rollDie();
    NUMBERS_ROLLED.push(first + second);

    var first_path =  process.env.PUBLIC_URL + "assets/" + first + ".png";
    var second_path = process.env.PUBLIC_URL + "assets/" + second + ".png";
    
    //TODO: set alt tag
    document.getElementById("first").src = first_path;
    document.getElementById("second").src = second_path;
  }
