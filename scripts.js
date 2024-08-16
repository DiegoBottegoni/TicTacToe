import { handleCellClick, restartGame, currentPlayer } from './gameLogic.js';

// Delegación de eventos al tablero
document.getElementById('board').addEventListener('click', handleCellClick);

// Evento para reiniciar el juego
document.getElementById('restart-btn').addEventListener('click', restartGame);

// Inicialización del mensaje
document.getElementById('message').textContent = `Turno del jugador ${currentPlayer}`;
