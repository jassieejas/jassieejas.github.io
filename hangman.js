

const wordToGuess = "banana";

const wordState = [];

let guessesLeft = 10;

const prevGuesses = [];



function displayWordState(state){
	let output = '';

	for (let i = 0; i < state.length; i++){
		const char = state[i];
		output = output + char;
		output = output + " ";
	}

	const wordStateContainer = document.getElementById('word');
	wordStateContainer.innerHTML = output;
}


function displayGuessesLeft(num){
	document.getElementById('guesses-left').innerHTML = num;
}


function displayPreviousGuesses(guessesArray){

	const list = document.getElementById('past-guesses');
	// clear list before adding guesses
	list.innerHTML = ' ';

	// for each guesses, append a li child
	for(let i = 0; i < guessesArray.length; i++){

		const guess = document.createElement('li');
		guess.innerHTML = guessesArray[i];
		list.appendChild(guess);
	}
}

function guess (wordToGuess, wordState, currGuess){
	// for each character in the word to be guessed
	for(let i = 0; i<wordToGuess.length; i++){
		// if the character matches the current guess,
		// update word state at that position
		if(wordToGuess[i] == currGuess){
			wordState[i] = currGuess;
		}
	}


	displayWordState(wordState);
	
}


function checkWon(wordState){
	let hasBlanks = false;
	for (let i = 0; i < wordState.length; i++){
		if(wordState[i] == '_'){
			hasBlanks = true;
		}
	}
	return !hasBlanks
}


function setup(){
	for(let i = 0; i < wordToGuess.length; i++){
		wordState.push('_')
}

	
	displayGuessesLeft(guessesLeft);
	displayWordState(wordState);
	displayPreviousGuesses(prevGuesses);
}



function setupForm(){
	// add form submit handler
	const form = document.getElementById('player-input');
	const input = document.getElementById('player-guess');


	form.onsubmit = function(event){
		event.preventDefault();
		
		// get current input
		const currentInput = input.value.toLowerCase();	

		// clear input after submits
				input.value = '';

		// check if input is valid
		if(!validateInput(currentInput, prevGuesses)){
			window.alert('Alphabets only!')
			return;
		}

		//  add guess to previous guesses
		prevGuesses.push(currentInput);

		// update guesses left
		guessesLeft = guessesLeft - 1;
		displayGuessesLeft(guessesLeft);

		// make guess
		guess(wordToGuess, wordState, currentInput);

		// check if won
		// check if user has won
		const won = checkWon(wordState);
		if (won){window.alert('Congratulations! You won!')
		}

		// check if user has lost
		else if(guessesLeft == 0){
			window.alert('You lost! :( ')
		}
		
		// update previous guesses
		displayPreviousGuesses(prevGuesses);
	}	

}
		

function validateInput(guess, prevGuesses){
	// check only one character per input


	// user has not guessed this before
	if(guess.length == 1 && prevGuesses.indexOf(guess) == -1){
		return true;
	}
	else {return false;
	}
}


// initial setup

setup();
setupForm();



