// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { asignPick, newGame } from './game.js';
const boardElement = document.getElementById('board');

boardElement.addEventListener('click', ev => {
  if (ev.target.classList.contains('card') && !ev.target.dataset.correct)
    asignChoice(ev.target);
});

/*Para que al empezar el juego se giren todas las cartas y se vuelvan a girar solas una sola vez*/
window.addEventListener('load', () => {});
