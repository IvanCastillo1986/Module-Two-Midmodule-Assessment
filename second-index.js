// Will start coding the project from scratch. This one will be neater, with an object instead of array to 
// access and display diceSymbols. Will use defer instead of DOMContentLoaded

// Added separate stylesheet

// SMART goals:             (Specific Measurable Acheivable Relevant Timebound)
// By 12:40 PM, I will encapsulate my input tag and button inside a form tag and understand what that does to my code
// <form> tag has certain default behaviors. For one, it attempts to submit everything out to a server. For some reason, this 
// removes the values we try to display on the webpage after a mSec. Had to add an event listener with preventDefault()

let historyCount = 0
let historyArray = ['']

let form = document.querySelector("form")
form.addEventListener("click", function(event) {
    event.preventDefault()
})

let btn = document.getElementById("dice-button")
btn.addEventListener("click", () => {

function randomNum() {
    let min = 0
    let max = 6
    return Math.floor(Math.random(min) * max) + 1
}
let diceArray = []
let input = parseInt(document.getElementById("dice-input").value)
function addToArray() {
    for (let i = 0; i < input; i++) {
        diceArray.push(randomNum())
    }
}
addToArray()
console.log(diceArray)

let diceSymbols = {
    1: "&#9856",
    2: "&#9857",
    3: "&#9858",
    4: "&#9859",
    5: "&#9860",
    6: "&#9861"
}
let dicePara = document.getElementById("dice-para")
function populateDice() {
    dicePara.innerHTML = ''
    for (let i = 0; i < diceArray.length; i++) {
        dicePara.innerHTML = dicePara.innerHTML + diceSymbols[diceArray[i]]
    }
}
populateDice()

let sum = 0
function calculateSum() {
    for (let element of diceArray) {
        sum = sum + element
    }
    return sum
}
let sumPara = document.getElementById("sum-para")
sumPara.textContent = calculateSum()

//The following is to populate the "History" div:
//(we are incrementing a global historyCount, and pushing into a global historyArray, to record and display subsequent rolls)
let historyText = `${dicePara.innerHTML} = ${sum}`
historyArray.push(historyText)
let ul = document.querySelector("ul")
let li = document.createElement("li")

if (historyCount > 0) {
li.innerHTML = historyArray[historyCount]
ul.appendChild(li)
}

historyCount++
})

