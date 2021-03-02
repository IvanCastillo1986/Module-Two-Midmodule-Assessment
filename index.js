


document.addEventListener("DOMContentLoaded", () => {
    // The Roll button to click on
let rollBtn = document.getElementById("dice-button")
    // This function takes button click and displays a specified dice from 1-6 and displays it in #dice-para 
    let historyCount = 0
rollBtn.addEventListener("click", () => {
    function randomNum() {
        let min = 0
        let max = 6
        return Math.floor(Math.random(min) * max) + 1
    }
// What we need to access for input:
    // The number input for the number of dice thrown       
let diceNum = parseInt(document.getElementById("dice-input").value)
    console.log(diceNum)
// Values we need to collect:
// (since these are values, we'll need to collect them by calling value or innerText properties)
    // number of dice from input - diceNum
    // value of each die in an array - myStats.dieArr
    // array representing a die for each number - 
    // sum of number of dice * value of each die - myStats.sum
    let myStats = {
        diceArr: [],
        sum: 0,
        diceSymbol: ["&#9856", "&#9857", "&#9858", "&#9859", "&#9860", "&#9861"],   // the index here needs to match the values in diceArr.
        addToArr: function() {                             // That means that when we loop through each value of diceArr, we need to account
            for (let i = 0; i < diceNum; i++) {            // for the discrepency in index 0, and treat that as number 1. We do this by
            this.diceArr.push(randomNum(diceNum))          // subtracting 1 from the value of diceArr when we're calling it in the loop
            }                                              // that displays the diceSymbol. 
            return this.diceArr
        },
    }
myStats.addToArr()

// What we need to access to store information:
    // The first paragraph inside the div for the values of dice thrown
    let diceDisplay = document.getElementById("dice-para")
function displayDice() {                            // A better way to have done this was to define diceSymbol as an object instead
    diceDisplay.innerHTML = ''
    for (let i = 0; i < myStats.diceArr.length; i++) {
        diceDisplay.innerHTML = diceDisplay.innerHTML + myStats.diceSymbol[myStats.diceArr[i]-1]
    }
}
displayDice()       // The dice need to clear from the paragraph when click is pressed again. We do this by adding an empty string at beginning of this function definition

console.log(myStats.diceArr)

        // we need to do two things here:
            // 1) collect the numbers for each dice thrown, to be added up in the sum later
                // values will be stored in myStats.dieArr
            // 2) display each number with it's correlation to the dice symbol
                // symbols will be collected from myStats.dieArr
    // The second paragraph inside the div to display the sum of dice values after button is clicked
let sumDisplay = document.getElementById("sum-para")
    function collectSum() {
        for (let element of myStats.diceArr) {
           myStats.sum = myStats.sum + element
        }
    }
collectSum()
sumDisplay.innerHTML = myStats.sum

// we will use a similar solution as secondLargestNum(), with a tempVariable
let ul = document.querySelector("ul")
let li = document.createElement("li")
let oldClick = `${diceDisplay.innerHTML}=${sumDisplay.innerHTML}`
function displayHistory() {
        ul.appendChild(li)
        li.textContent = `${diceDisplay.innerHTML}=${sumDisplay.innerHTML}`
        // li.style.justifyContent = "center";     // find out how to style.justifyContent="center" with this item
}
displayHistory()

}) //eventListener click closebracket

}) //eventListener DOMContentLoaded closebracket