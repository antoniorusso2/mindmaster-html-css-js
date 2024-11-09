console.log("mindmaster");

//gioco nel quale bisogna indovinare 4 numeri generati casualmente
//array con quattro numeri casuali
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
//generare elemento DOM

/**
 *
 * @param {string} tag
 * @param {Array} classList
 * @param {string} content
 * @returns
 */
function createDOMElement(tag, classList = [], content = "") {
  const element = document.createElement(tag);

  if (classList.length > 0) {
    element.classList.add(...classList);
  }
  element.innerHTML = content;

  return element;
}
function winOrLose(bool) {
  if (bool) {
    const youWin = createDOMElement("h2", [], "Hai Vinto!");
    const winText = createDOMElement(
      "p",
      [],
      "I numeri inseriti sono giusti e nella posizione corretta"
    );

    modalTitle.appendChild(youWin);
    modalText.appendChild(winText);
  } else {
    const youLose = createDOMElement("h2", [], "Hai Perso!");
    const loseText = createDOMElement(
      "p",
      [],
      "Hai finito il numero di tentativi validi, prova di nuovo!"
    );

    modal.appendChild(youLose);
    modal.appendChild(loseText);
  }
}

/**
 *
 * @param {*} el
 * @param {string} remove
 * @param {string} add
 */
function removeAddClass(el, remove, add) {
  el.classList.remove(remove);
  el.classList.add(add);
}

//DOM
//input html per l'inserimento dei numeri
const inputNums = document.querySelectorAll(".user-num"); //nodeList con i numeri inseriti
const form = document.getElementById("input-form"); //form evento submit
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
// modale
const modalContainer = document.querySelector(".modal-container");
console.log(modalContainer);
const modal = document.querySelector(".modal");
// console.log(modal);
const modalTitle = document.querySelector(".modal-header");
const modalText = document.querySelector(".modal-body");
const playAgainBtn = document.querySelector(".btn.modal-btn");

//button
const btn = document.querySelector(".btn");
console.log(btn);

//===================================================================//

//array numeri da indovinare
const numsToGuess = [];
console.log(numsToGuess);

while (numsToGuess.length < 4) {
  let num = getRandomIntInclusive(1, 9);

  if (!numsToGuess.includes(num)) {
    numsToGuess.push(num);
  }
}

//pulizia campi alla ricarica della pagina
num1.value = "";
num2.value = "";
num3.value = "";
num4.value = "";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const userGuesses = [];
  const rightGuesses = [];
  //lista risposte date dall'utente
  const answerList = document.querySelector(".answers-list");
  // console.log(answerList.length);
  //contenitore badges
  const badgesContainer = createDOMElement("div", ["badges-container"]);

  for (let i = 0; i < numsToGuess.length; i++) {
    //trasformazione in numero intero il valore inserito dall'utente;
    let userNum = parseInt(inputNums[i].value);
    userGuesses.push(userNum);

    //controllo sull' index separato dal ciclo per aggiungere elemento ad array

    //* controllo uguaglianza e posizione numero
    if (numsToGuess[i] === userNum) {
      const correctBadge = createDOMElement(
        "div",
        ["correct-badge", "fa-regular", "fa-circle"],
        ""
      );
      badgesContainer.appendChild(correctBadge);

      rightGuesses.push(userNum);
    } else if (numsToGuess.includes(userNum)) {
      const wrongPosition = createDOMElement(
        "div",
        ["wrong-position", "fa-regular", "fa-square"],
        ""
      );
      badgesContainer.appendChild(wrongPosition);
    } else {
      const wrong = createDOMElement(
        "div",
        ["wrong", "fa-solid", "fa-xmark"],
        ""
      );
      badgesContainer.appendChild(wrong);
    }

    // inputNums[i].value = ''; //?pulizia campo
  }

  const answer = createDOMElement("li", ["answer"], userGuesses);
  answerList.appendChild(answer);

  // aggiunta del container dei badge
  answer.appendChild(badgesContainer);

  if (rightGuesses.length === numsToGuess.length) {
    removeAddClass(modalContainer, "hidden", "flex");
    winOrLose(true);
    modalContainer.appendChild(modal);
  }
  playAgainBtn.addEventListener("click", () => {
    location.reload();
  });
});

// console.log(inputNums);
