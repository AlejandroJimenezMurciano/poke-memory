const allCards = document.querySelectorAll('.card');

const addShow = card => {
  card.classList.add('card--show');
};

const removeShow = card => {
  card.classList.remove('card--show');
};

/*Para que el programa chequee si la primera y la segunda carta escogidas son iguales o no*/

export { allCards, addShow, removeShow };
