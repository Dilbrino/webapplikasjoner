import './styles.css';

// TODO: Bruk getElementById til å hente HTML med #id
const numbersUl = document.getElementById('numbers');
const guessUl = document.getElementById('guess');
const button = document.querySelector('button');

// TODO: Lag en liste med tallene som skal sorteres
const numbers = [4, 2, 7, 1, 9, 3, 6, 5, 8];

const getGuess = () => {
  // TODO: Bruk querySelectorAll på guessUl for å hente ut alle input feltene
  const answers = guessUl.querySelectorAll('input');
  // TODO: Bruk .map for å hente ut verdiene i input feltene
  return Array.from(answers).map((input) => parseInt(input.value));
};

const checkNumberSeq = () => {
  const guess = getGuess();
  let isCorrect = JSON.stringify(numbers.slice().sort()) === JSON.stringify(guess.slice().sort());
  if (isCorrect) {
    alert('Du sorterte riktig');
  }
};

const addInputUI = () => {
  // TODO: Bruk for-of (eller vanlig for-løkke) og guessUl til å lage li-elementer med input elementer for å kunne skrive inn hva som skal sorteres
  for (let i = 0; i < numbers.length; i++) {
    const inputLi = document.createElement('li');
    inputLi.innerHTML = `<input type="number" placeholder="Skriv inn tallet" />`;
    guessUl.appendChild(inputLi);
  }
};

const addNumbersUI = () => {
  // TODO: Bruk for-of og numbersUl til å lage li-elementer med tallene som skal sorteres
  for (const number of numbers) {
    const numberLi = document.createElement('li');
    numberLi.textContent = number;
    numbersUl.appendChild(numberLi);
  }
};

const createUI = () => {
  addNumbersUI();
  addInputUI();
};

createUI();

button.addEventListener('click', checkNumberSeq);
