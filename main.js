// js

// The deck 
let deck = [
    // diamonds
    'Ace of diamonds',
    '2 of diamonds',
    '3 of diamonds',
    '4 of diamonds',
    '5 of diamonds',
    '6 of diamonds',
    '7 of diamonds',
    '8 of diamonds',
    '9 of diamonds',
    '10 of diamonds',
    'Jack of diamonds',
    'Queen of diamonds',
    'King of diamonds',
    // clubs
    'Ace of clubs',
    '2 of clubs',
    '3 of clubs',
    '4 of clubs',
    '5 of clubs',
    '6 of clubs',
    '7 of clubs',
    '8 of clubs',
    '9 of clubs',
    '10 of clubs',
    'Jack of clubs',
    'Queen of clubs',
    'King of clubs',
    //hearts
    'Ace of hearts',
    '2 of hearts',
    '3 of hearts',
    '4 of hearts',
    '5 of hearts',
    '6 of hearts',
    '7 of hearts',
    '8 of hearts',
    '9 of hearts',
    '10 of hearts',
    'Jack of hearts',
    'Queen of hearts',
    'King of hearts',
    // spades
    'Ace of spades',
    '2 of spades',
    '3 of spades',
    '4 of spades',
    '5 of spades',
    '6 of spades',
    '7 of spades',
    '8 of spades',
    '9 of spades',
    '10 of spades',
    'Jack of spades',
    'Queen of spades',
    'King of spades'
]
let cards = 0;
let playerAmount = 0;
let dealerAmount = 0;

// Event listiners
document.getElementById('stay').addEventListener('click', stay);
document.getElementById('Draw').addEventListener('click', DrawACard);

// Functions
function stay() {
    // remove the hit me button
    let hitMe = document.getElementById('Draw')
    hitMe.remove()
    //draw a card
    let r = Math.floor(Math.random() * deck.length);
   
    //desplay cards until score is = 16 or higher
   
    for (let d = 0; d >= 16; d += chosenCard[0]) {
    let chosenCard = deck.splice(r, 1)
    blackjack(chosenCard[0], 'dealer')
    
    }

    /*
    if (playerAmount < dealerAmount) {
        win()
    }else {
        bust()
    }
    */
}

function DrawACard() {
    let r = Math.floor(Math.random() * deck.length);
    let chosenCard = deck.splice(r, 1)
    console.log(chosenCard);
    blackjack(chosenCard[0], 'player');
}

function blackjack(card, who) {

    if (card == 'Ace of spades' || card == 'Ace of hearts' || card == 'Ace of clubs' || card == 'Ace of diamonds') {
        // one or eleven
    }else if (card == '2 of spades' || card == '2 of hearts' || card == '2 of clubs' || card == '2 of diamonds') {
        if (who == 'player') {
            playerAmount += 2
            if (playerAmount > 21) {
                bust()
            }else if (playerAmount == 21) {
                win()
            }
        }else if (who == 'dealer') {
            dealerAmount += 2
            if (dealerAmount > 21) {
                win()
            }else if (dealerAmount == 21) {
                bust()
            }
        }
    }else if (card == '3 of spades' || card == '3 of hearts' || card == '3 of clubs' || card == '3 of diamonds') {
        if (who == 'player') {
            playerAmount += 3
            if (playerAmount > 21) {
                bust()
            }else if (playerAmount == 21) {
                win()
            }
        }else if (who == 'dealer') {
            dealerAmount += 3
            if (dealerAmount > 21) {
                win()
            }else if (dealerAmount == 21) {
                bust()
            }
        }
    }else if (card == '4 of spades' || card == '4 of hearts' || card == '4 of clubs' || card == '4 of diamonds') {
        if (who == 'player') {
            playerAmount += 4
            if (playerAmount > 21) {
                bust()
            }else if (playerAmount == 21) {
                win()
            }
        }else if (who == 'dealer') {
            dealerAmount += 4
            if (dealerAmount > 21) {
                win()
            }else if (dealerAmount == 21) {
                bust()
            }
        }
    }else if (card == '5 of spades' || card == '5 of hearts' || card == '5 of clubs' || card == '5 of diamonds') {
        if (who == 'player') {
            playerAmount += 5
            if (playerAmount > 21) {
                bust()
            }else if (playerAmount == 21) {
                win()
            }
        }else if (who == 'dealer') {
            dealerAmount += 5
            if (dealerAmount > 21) {
                win()
            }else if (dealerAmount == 21) {
                bust()
            }    
        }
    }else if (card == '6 of spades' || card == '6 of hearts' || card == '6 of clubs' || card == '6 of diamonds') {
        if (who == 'player') {
            playerAmount += 6
            if (playerAmount > 21) {
                bust()
            }else if (playerAmount == 21) {
                win()
            }
        }else if (who == 'dealer') {
            dealerAmount += 6
            if (dealerAmount > 21) {
                win()
            }else if (dealerAmount == 21) {
                bust()
            }
        }
    }else if (card == '7 of spades' || card == '7 of hearts' || card == '7 of clubs' || card == '7 of diamonds') {
        if (who == 'player') {
            playerAmount += 7
            if (playerAmount > 21) {
                bust()
            }else if (playerAmount == 21) {
                win()
            }
        }else if (who == 'dealer') {
            dealerAmount += 7
            if (dealerAmount > 21) {
                win()
            }else if (dealerAmount == 21) {
                bust()
            }
        }
    }else if (card == '8 of spades' || card == '8 of hearts' || card == '8 of clubs' || card == '8 of diamonds') {
        if (who == 'player') {
            playerAmount += 8
            if (playerAmount > 21) {
                bust()
            }else if (playerAmount == 21) {
                win()
            }
        }else if (who == 'dealer') {
            dealerAmount += 8
            if (dealerAmount > 21) {
                win()
            }else if (dealerAmount == 21) {
                bust()
            }
        }
    }else if (card == '9 of spades' || card == '9 of hearts' || card == '9 of clubs' || card == '9 of diamonds') {
        if (who == 'player') {
            playerAmount += 9
            if (playerAmount > 21) {
                bust()
            }else if (playerAmount == 21) {
                win()
            }
        }else if (who == 'dealer') {
            dealerAmount += 9
            if (dealerAmount > 21) {
                win()
            }else if (dealerAmount == 21) {
                bust()
            }
        }
    }else if (card == '10 of spades' || card == '10 of hearts' || card == '10 of clubs' || card == '10 of diamonds') {
        if (who == 'player') {
            playerAmount += 10
            if (playerAmount > 21) {
                bust()
            }else if (playerAmount == 21) {
                win()
            }
        }else if (who == 'dealer') {
            dealerAmount += 10
            if (dealerAmount > 21) {
                win()
            }else if (dealerAmount == 21) {
                bust()
            }
        }
    }else if (card == 'Jack of spades' || card == 'Jack of hearts' || card == 'Jack of clubs' || card == 'Jack of diamonds') {
        if (who == 'player') {
            playerAmount += 10
            if (playerAmount > 21) {
                bust()
            }else if (playerAmount == 21) {
                win()
            }
        }else if (who == 'dealer') {
            dealerAmount += 10
            if (dealerAmount > 21) {
                win()
            }else if (dealerAmount == 21) {
                bust()
            }
        }
    }else if (card == 'Queen of spades' || card == 'Queen of hearts' || card == 'Queen of clubs' || card == 'Queen of diamonds') {
        if (who == 'player') {
            playerAmount += 10
            if (playerAmount > 21) {
                bust()
            }else if (playerAmount == 21) {
                win()
            }
        }else if (who == 'dealer') {
            if (dealerAmount > 21) {
                win()
            }else if (dealerAmount == 21) {
                bust()
            }
        }
    }else if (card == 'King of spades' || card == 'King of hearts' || card == 'King of clubs' || card == 'King of diamonds') {
        if (who == 'player') {
            playerAmount += 10
            if (playerAmount > 21) {
                bust()
            }
        }else if (who == 'dealer') {
            dealerAmount += 10
            if (dealerAmount > 21) {
                win()
            }else if (dealerAmount == 21) {
                bust()
            }
        }
    }
    document.getElementById('you').innerHTML = playerAmount;
    document.getElementById('dealer').innerHTML = dealerAmount;
}

function bust() {
    document.getElementById('Outcome').innerHTML = 'You lose'
}

function win() {
    document.getElementById('Outcome').innerHTML = 'You win'
}
