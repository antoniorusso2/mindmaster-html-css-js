console.log('mindmaster');

//gioco nel quale bisogna indovinare 4 numeri generati casualmente
//array con quattro numeri casuali
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

//generare elemento DOM
function createDOMElement(tag, classList = [], content = '') {
  const element = document.createElement(tag);

  if (classList.length > 0) {
    element.classList.add(...classList);
  }
  element.innerHTML = content;

  return element;
}

//DOM
//input html per l'inserimento dei numeri
const inputNums = document.querySelectorAll('.user-num');//nodeList con i numeri inseriti
const form = document.getElementById('input-form');//form evento submit
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');

//button
const btn = document.querySelector('.btn');
console.log(btn);

//===================================================================//



//array numeri da indovinare
const numsToGuess = [];
console.log(numsToGuess);

while (numsToGuess.length < 4) {
  let num = getRandomIntInclusive(1, 9);

  if (!(numsToGuess.includes(num))) {
    numsToGuess.push(num);
  }
}

//pulizia campi alla ricarica della pagina
num1.value = '';
num2.value = '';
num3.value = '';
num4.value = '';

form.addEventListener('submit', (event) => {

  event.preventDefault();

  const userGuesses = [];
  const rightGuesses = [];
  //lista risposte date dall'utente
  const answerList = document.querySelector('.answers-list');
  //contenitore badges
  const badgesContainer = createDOMElement('div', ['badges-container']);


  for (let i = 0; i < numsToGuess.length; i++) {

    //trasformazione in numero intero il valore inserito dall'utente;
    let userNum = parseInt(inputNums[i].value);
    userGuesses.push(userNum);

    // if (isNaN(userNum) || 1 > userNum > 9) {
    //   alert('I dati inseriti non risultano validi! \n Utilizzare solo numeri compresi tra 1 e 9');
    //   location.reload();
    // }

    //* controllo uguaglianza e posizione numero
    if (numsToGuess[i] === userNum) {

      const correctBadge = createDOMElement('div', ['correct-badge', 'fa-regular', 'fa-circle'], '');
      badgesContainer.appendChild(correctBadge);

      rightGuesses.push(userNum);

    } else if (numsToGuess.includes(userNum)) {

      const wrongPosition = createDOMElement('div', ['wrong-position', 'fa-regular', 'fa-square'], '');
      badgesContainer.appendChild(wrongPosition);


    } else {

      const wrong = createDOMElement('div', ['wrong', 'fa-solid', 'fa-xmark'], '');
      badgesContainer.appendChild(wrong);
    }


    // inputNums[i].value = ''; //?pulizia campo
  };

  const answer = createDOMElement('li', ['answer'], userGuesses);
  answerList.appendChild(answer);


  // aggiunta del container dei badge
  answer.appendChild(badgesContainer);

  //risultato finale
  // if (
  //   userGuesses[0] === numsToGuess[0] &&
  //   userGuesses[1] === numsToGuess[1] &&
  //   userGuesses[2] === numsToGuess[2] &&
  //   userGuesses[3] === numsToGuess[3]
  // ) {
  //   alert('Complimenti! Hai vinto! \n Tutti i numeri inseriti sono giusti e nella giusta posizione!');
  // }
  if (rightGuesses.length === numsToGuess.length) {
    alert('Complimenti! Hai vinto! \n Tutti i numeri inseriti sono giusti e nella giusta posizione!');
  }
});



// console.log(inputNums);