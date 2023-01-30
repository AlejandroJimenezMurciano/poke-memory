// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { allCards, addShow, removeShow } from './constants.js';

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
  