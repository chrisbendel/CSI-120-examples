window.onload = () => {
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
    console.log("Player picked: ", playerMove, "Computer Picked: ", computerMove);
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
