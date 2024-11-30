// 2.41

let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess); 
    })
}

function validateGuess(guess){
    if (isNaN(guess)){
        alert('Please enter the valid number.');
    }else if (guess < 1){
        alert('Please enter a number more than 1.');

    }else if (guess > 100){
        alert('Please enter a number less than 100.');

    }else {
        prevGuess.push(guess);
        if (numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game over. Random number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if (guess === randomNumber){
        displayMessage(`You guessed it right.`);
    }else if (guess < randomNumber){
        displayMessage(`The number is Tooo low`);
    }else if (guess > randomNumber){
        displayMessage(`The number is Tooo high`);
    }
}

function displayGuess(guess){
    // cleaner 
    userInput.value = '';
    guessSlot.innerHTML = `${guess},  `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    })
}

