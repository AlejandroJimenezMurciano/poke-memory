const allCards = document.querySelectorAll('.card');

const addShow = card => {
    card.classList.add('card--show');
};
  
const removeShow = card => {
    card.classList.remove('card--show');
};

export { allCards, addShow, removeShow };
