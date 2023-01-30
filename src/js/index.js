// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { allCards, addShow, removeShow } from './constants.js';

let firstPick;
let secondPick;

/*Para que al empezar el juego se giren todas las cartas y se vuelvan a girar solas una sola vez*/
window.addEventListener('load', () => {
  allCards.forEach(card => {
    addShow(card);
  });
  const timeoutId = setTimeout(() => {
    allCards.forEach(card => {
      removeShow(card);
    });
    clearTimeout(timeoutId);
  }, 3000);
});

const checkCards = () => {
  if (firstPick.dataset.number !== secondPick.dataset.number) {
    removeShow(firstPick);
    removeShow(secondPick);
  } else {
    firstPick.dataset.correct = true;
    secondPick.dataset.correct = true;
  }
  firstPick = undefined;
  secondPick = undefined;
};

const asignChoice = card => {
  if (card.dataset.selected) return;
  firstPick ? (secondPick = card) : (firstPick = card);
  addShow(card);

  card.addEventListener(
    'transitioned',
    () => {
      if (firstPick && secondPick) checkCards();
    },
    { once: true }
  );
};

document.addEventListener('click', ev => {
  if (ev.target.classList.contains('card') && !ev.target.dataset.correct)
    asignChoice(ev.target);
});
