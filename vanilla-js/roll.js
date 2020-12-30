function rollDie() {
    return  Math.floor(Math.random() * 6) + 1;   // returns a random number from 1-6
}

function rollDice() {
    first = rollDie();
    second = rollDie();

    first_path = "assets/" + first + ".png";
    second_path = "assets/" + second + ".png";

    document.getElementById("first").src = first_path;
    document.getElementById("second").src = second_path;

}