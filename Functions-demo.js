///Data type conversion///
let anakinhealth = 100;

// console.log(typeof String(anakinhealth));
// console.log(Boolean(anakinhealth));

// console.log(typeof +anakinhealth);
// console.log(typeof Number(anakinhealth));
// console.log(typeof parseInt(anakinhealth));
///These three will all return a number if the string is just numbers ie "100".///
///If the string has numbers and letters, only parseInt will find the number ie "100a"///

///String methods///

let theWinnerIs = "Anakin is the winner.";
let newWinner = theWinnerIs.replace("n","l");
// theWinnerIs.replace("n", "l");
// console.log(theWinnerIs);///This will log the original since we havent set the changed string.///
// console.log(newWinner);

let newWinnerall = theWinnerIs.replaceAll("n","l");
// console.log(newWinnerall);

let newWinnerSplit = theWinnerIs.split(" "); //If you do not add anythin to the (), you will get the string as an array//
// console.log(newWinnerSplit);
let newWinnerJoin = newWinnerSplit.join("-");
// console.log(newWinnerJoin);

// Functions// Reusable pieces of code//

function isAnakinAlive() {
    if(anakinhealth > 0) {
        console.log("Anakin is alive!");
    } else {
        console.log("Anakin is dead...");
    };
};

// isAnakinAlive();

function supriseAttack(attack) {
    anakinhealth -= attack;  //same as anakinHealth = anakingHealth - attack;//
    isAnakinAlive();
}

// supriseAttack(100);
// console.log(anakinhealth);

function greeting(person1, person2) {
    console.log(`${person1} says to ${person2}: Hello there.`);
}
//Javascript functions accept arguments in the way they are provided.//
// greeting("Obi-Wan Kenobi", "General Grievous");
//Too many arguments and Javascript will ignore the extra//
//Not enough arguments and you will get "undefined".

function rollDice() {
    let possibleRolls = [1, 2, 3, 4, 5, 6];
    let randomNumber = Math.floor(Math.random() * possibleRolls.length);
    return possibleRolls[randomNumber]
}

let firstRoll = rollDice()
let secondRoll = rollDice()
// console.log(firstRoll);
// console.log(secondRoll);

//this is legal because of scope. The next function is outside the scope of above.//
function diceMultiplier() {
    let firstRoll = rollDice();
    let secondRoll = rollDice();

    return firstRoll * secondRoll;
}
let multipliedRoll = diceMultiplier();
console.log(multipliedRoll);

