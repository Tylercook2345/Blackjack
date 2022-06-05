let player = {
    name: 'Tyler',
    chips: 100,
    sayHello: function() {
        console.log("Hello!")
    }
}

player.sayHello()

let cards = []
let sum = 0
let hasBlackJack= false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.querySelector("#cards-el")



let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.ceil(Math.random()*13);
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    }else {
        return randomNumber
    }
}
    


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
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
    if (isAlive === true && hasBlackJack === false) {
        let drawnCard = getRandomCard()
        sum += drawnCard
        cards.push(drawnCard)
        renderGame()
    }
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


