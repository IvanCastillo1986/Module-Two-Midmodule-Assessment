
document.addEventListener("DOMContentLoaded", () => {

    let diceNum = document.getElementById("dice-input")
    let rollBtn = document.getElementById("dice-button")
    let dieDisplay = document.getElementById("dice-para")
    let sumDisplay = document.getElementById("sum-para")


    // This function takes button click and displays a specified dice from 1-6 and displays it in #dice-para 
    rollBtn.addEventListener("click", () => {
        function randomNum() {
            let min = 0
            let max = 6
            return Math.floor(Math.random(min) * max)
        }
        
        function diceRoll(num) {
            let diceArr = ["&#9856", "&#9857", "&#9858", "&#9859", "&#9860", "&#9861"]
            dieDisplay.innerHTML = diceArr[num]

            sumDisplay.textContent = num
        }
        diceRoll(randomNum())


        let ul = document.querySelector("ul")
        let li = document.createElement("li")
        li.textContent = 
        ul.appendChild(li)

    })

    

    

})
    













