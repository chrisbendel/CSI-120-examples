// Create an array of [0, 1, 2, 3 ... 24];
let board = shuffleArray([...Array(25).keys()]);
console.log(board);

// Create array of all false values
let userMoves = new Array(25).fill(false);
console.log(userMoves);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

generateBoard = () => {
    let bingoBoard = document.getElementById("bingo-board");

    let html = "<table>";
    board.forEach((cell, index) => {
        if (index % 5 == 0) {
            html += "<tr>";
        }

        html += `<td class="cell">${cell}</td>`;

        if (![0, 5, 10, 15, 20].includes(index) && index % 5 == 0) {
            html += "</tr>";
        }
    });
    html += "</table>";

    bingoBoard.innerHTML = html;
}

setupListeners = () => {
    // Turn the HTMLCollection into an actual array so we can use .forEach
    let cells = Array.from(document.getElementsByClassName("cell"));

    cells.forEach((cell, index) => {
        cell.onclick = () => {
            cell.style.backgroundColor = "lightgreen";
            userMoves[index] = true;
            checkWin(userMoves);
        }
    });
}

checkRows = (moves) => {
    let winner = false;
    [0, 5, 10, 15, 20].forEach(cellIndex => {
        if (moves[cellIndex] && moves[cellIndex + 1] && moves[cellIndex + 2] && moves[cellIndex + 3] && moves[cellIndex + 4]) {
            winner = true;
        }
    });
    return winner;
}

checkColumns = (moves) => {
    let winner = false;
    [0, 1, 2, 3, 4].forEach(cellIndex => {
        if (moves[cellIndex] && moves[cellIndex + 5] && moves[cellIndex + 10] && moves[cellIndex + 15] && moves[cellIndex + 20]) {
            winner = true;
        }
    });
    return winner;
}

checkWin = (moves) => {
    if (
        checkRows(moves) ||
        checkColumns(moves) ||
        // diagonals
        moves[0] && moves[6] && moves[12] && moves[18] && moves[24] ||
        moves[4] && moves[8] && moves[12] && moves[16] && moves[20]
    ) {
        alert('winner');
    }
}

window.onload = () => {
    // page loaded, do stuff
    generateBoard();

    // setup board click listeners
    setupListeners();
}