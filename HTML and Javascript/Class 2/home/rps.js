window.onload = () => {
    let letters = ["s", "m", "a", "r", "t"];
    let guessedLetters = ["_", "_", "_", "_", "_"];

    function guessLetter() {
        let guessLet = document.getElementById("guessLet");
        document.getElementById("Word").innerText = guessedLetters;
        for (let i = 0; i < letters.length; i++) {
            if (guessLet == letters[i]) {
                debugger;
                // splice is probably overkill here, you can just replace at the index
                // guessedLetters.splice(i, `${letters[i]}`);
                guessedLetters[i] = letters[i];
                document.getElementById("response").innerText = "";
                document.getElementById("Word").innerText = guessedLetters;
                return;
            }
        }
    }

    guessLetter();
    guessLetter();

    // answer and guessed are two function parameters that are the array
    function compareWords(answer, guessed) {
        // In this case, we know guessed is the same length as letters
        // So we can just compare each index to see if they're the same
        for (let i = 0; i < answer.length; i++) {
            // if the first letter in guessed is not the same as the first letter in answer
            // then we know they haven't gotten the full word right yet
            if (answer[i] !== guessed[i]) {
                return 'Not yet';
            }
        }

        // If we get through the whole loop then we know each letter matched
        // So we can assume they got it correct
        return 'Correct!';
    }
    
    // Check if they're the same
    compareWords(letters, guessedLetters);

    // Testing to make sure our function works
    let test1 = ['a', 'b', 'c'];
    let test2 = ['a', 'b', 'c'];
    console.log(compareWords(test1, test2));


    // Get all the options, rock/paper/scissors
    let options = Array.from(document.getElementsByClassName("option"));
    // Loop over them and set up the on click listener
    options.forEach(option => {
        // Event is given to us by the event callback
        option.onclick = (event) => {
            // event.target has the element that was clicked
            const ourMove = event.target.id;
            const computerMove = getComputerMove();

            const playerContainer = document.getElementById("player");
            const computerContainer = document.getElementById("computer");

            playerContainer.appendChild(document.getElementById(ourMove).cloneNode(true));
            computerContainer.appendChild(document.getElementById(computerMove).cloneNode(true));

            document.getElementById("options").style.display = 'none';

            const winner = checkWinner(ourMove, computerMove);

            document.getElementById("playerOutcome").innerText = getPlayerText(winner);
            document.getElementById("computerOutcome").innerText = getComputerText(winner);
        }
    });
}

const getPlayerText = (winner) => {
    if (winner === 'player') {
        return 'won';
    } else if (winner === 'computer') {
        return 'lost';
    } else {
        return 'tied';
    }
}

const getComputerText = (winner) => {
    if (winner === 'player') {
        return 'lost';
    } else if (winner === 'computer') {
        return 'won';
    } else {
        return 'tied';
    }
}

const getComputerMove = () => {
    // Set up our array of possible moves
    const options = ['rock', 'paper', 'scissors'];
    // Get random number from 0-2
    let move = Math.floor(Math.random() * 3);
    // return a random move
    return options[move];
}

const checkWinner = (playerMove, computerMove) => {
    if (playerMove === computerMove) {
        return 'tie';
    }

    if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }

}



