// create an array from [0, 1, 2, ..., 24];
let gameBoard = shuffleArray([...Array(25).keys()]);
// create array of size 25 with all false values
let userMoves = new Array(25).fill(false);

// [
//   0, 1, 2, 3, 4
//   5, 6, 7, 8, 9
//   10, 11, 12, 13, 14
//   15, 16, 17, 18, 19
//   20, 21, 22, 23, 24
// ]

// [01234, 56789, 1011121314, 1516171819, 202122232425, 05101520]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

createBoard = () => {
    // get board element
    let boardElement = document.getElementById("board");

    // Start a table
    let html = "<table>";

    // Create a cell for each number
    gameBoard.forEach((cell, index) => {
        // Every 5 items we want a new row
        if (index % 5 == 0) {
            html += `<tr>`;
        }
        // Insert the cell into the row (5 per row)
        html += `<td class="cell">${cell}</td>`;
        
        // Filter out comparing index to itself
        if (![0, 5, 10, 15, 20].includes(index) && index % 5 == 0) {
            html += `</tr>`;
        }
    });
    html += "<table>";

    // apply the HTML to the page
    boardElement.innerHTML = html;
}

setupClickListeners = () => {
    // get all the cells we made in createBoard()
    let cells = Array.from(document.getElementsByClassName("cell"));

    // Loop over them and set up a click listener for each one
    cells.forEach((element, index) => {
        element.onclick = (event) => {
            // set to green
            element.style.backgroundColor = "green";
            // populate the usermove at the index they clicked
            userMoves[index] = true;
            // Pass in the user moves to see if they won or not
            checkWin(userMoves);
        }
    });
}

checkWin = (moves) => {
    // Check all possible winning conditions
    if (
        moves[0] && moves[1] && moves[2] && moves[3] && moves[4] || 
        moves[5] && moves[6] && moves[7] && moves[8] && moves[9]
    ) {
        alert('bingo');
    }
}

window.onload = () => {
    createBoard();
    setupClickListeners();
}