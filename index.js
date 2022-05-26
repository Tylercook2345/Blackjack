let firstCard = 10
let secondCard = 5
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard 
let hasBlackJack= false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.querySelector("#cards-el")
console.log()

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    

    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card? "
        isAlive = true
    } else if (sum === 21) {
        message = "You've got BlackJack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    console.log("Drawing new card from the deck")
    let drawnCard = 5
    sum += drawnCard
    cards.push(drawnCard)
    console.log(cards)
    renderGame()

}

let age = 21 

if (age >= 21) {
    console.log("Welcome!")
} else {
    console.log("You're not old enough to enter this club!")
}


// CASH OUT!
console.log(hasBlackJack)
console.log(isAlive)
console.log(message)

