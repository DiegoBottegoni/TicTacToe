// Variables del juego
export let board = ['', '', '', '', '', '', '', '', ''];
export let currentPlayer = 'X';
export let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Función para manejar el clic en una celda
export function handleCellClick(event) {
    const cellIndex = event.target.getAttribute('data-index');

    if (board[cellIndex] !== '' || !gameActive) {
        return;
    }

    board[cellIndex] = currentPlayer;
    event.target.textContent = currentPlayer;

    checkResult();

    if (gameActive) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        document.getElementById('message').textContent = `Turno del jugador ${currentPlayer}`;
    }
}

// Función para verificar el resultado del juego
export function checkResult() {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        document.getElementById('message').textContent = `¡Jugador ${currentPlayer} ha ganado!`;
        gameActive = false;
        return;
    }

    // Verificar si hay un empate
    if (!board.includes('')) {
        document.getElementById('message').textContent = '¡Es un empate!';
        gameActive = false;
    }
}

// Función para reiniciar el juego
export function restartGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    document.querySelectorAll('.cell').forEach(cell => (cell.textContent = ''));
    document.getElementById('message').textContent = `Turno del jugador ${currentPlayer}`;
}
