let firstPick;
let secondPick;

const addShow = card => {
  card.classList.add('card--show');
};

const removeShow = card => {
  card.classList.remove('card--show');
};

export const newGame = () => {
  const allCards = document.querySelectorall('.card');
  allCards.forEach(card => {
    addShow(card);
  });
  const timeoutId = setTimeout(() => {
    allCards.forEach(card => {
      removeShow(card);
    });
    clearTimeout(timeoutId);
  }, 2000);
};

/*Para que el programa chequee si la primera y la segunda carta escogidas son iguales o no*/
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

export const asignPick = card => {
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
