const mystats = {
diceArr: [],
diceNum: 3,
sum: 0,
addToArr: function() {
    for (let i = 0; i < this.diceNum; i++) {
        this["diceArr"].push(randomNums())
    }
    return this["diceArr"]
},
collectSum: function() {
    for (let element of this.diceArr) {
        this.sum = this.sum + element
    }
}
}
console.log(mystats.addToArr(), mystats.diceArr)
console.log(mystats.sum)

function getSum() {
    for (let element of mystats.diceArr) {
        mystats.sum = mystats.sum + element
    }
    return mystats.sum
}
getSum()
console.log(mystats.sum)


function randomNums() {
    let min = 0
    let max = 6
    return Math.floor(Math.random(min) * max)+1
}
// console.log(randomNum())
// let diceNum = 3

// let myStats = {
//     numOfDice: diceNum,
//     diceArr: [],
//     sum: 0,
//     diceSymbolArr: ["&#9856", "&#9857", "&#9858", "&#9859", "&#9860", "&#9861"],
//     addToArr: function() {
//         this.diceArr.push(randomNum(this.numOfDice))
//         return this.diceArr
//     },
// }
// console.log(myStats.numOfDice+ 9)
// console.log(myStats.diceArr)

// console.log(for (let i = 0; i < diceArr.length; i++) {
//     diceDisplay.innerHTML = myStats.diceSymbolArr[myStats.diceArr[i]]
// })