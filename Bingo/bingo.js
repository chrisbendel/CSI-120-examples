let gameBoard = shuffleArray([...Array(25).keys()]);
let userMoves = new Array(25).fill(null);

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
    let boardElement = document.getElementById("board");

    let html = "<table>";

    gameBoard.forEach((cell, index) => {
        if (index % 5 == 0) {
            html += `<tr>`;
        }
        html += `<td class="cell">${cell}</td>`;
        
        if (![0, 5, 10, 15, 20].includes(index) && index % 5 == 0) {
            html += `</tr>`;
        }
    });
    html += "<table>";

    boardElement.innerHTML = html;
}

setupClickListeners = () => {
    let cells = Array.from(document.getElementsByClassName("cell"));
    cells.forEach((element, index) => {
        element.onclick = (event) => {
            element.style.backgroundColor = "green";
            userMoves[index] = true;
            checkWin(userMoves);
        }
    });
}

checkWin = (moves) => {
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