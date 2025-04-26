import Number from "./Number.js";
import UserNumbers from "./UserNumbers.js";

export default class Game {
  numbers = []; //array of number instance
  attempts = 0;
  won = false;
  lost = false;

  constructor() {
    this.numbers = this.generateNumbers();
    this.attempts = 0;
    this.won = false;
    this.lost = false;
  }

  generateNumbers() {
    const numbers = [];
    while (numbers.length < 4) {
      //   const num = Math.floor(Math.random() * 9) + 1;
      const num = new Number().getRandomIntInclusive(1, 9);
      // not pushing duplicate numbers
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    return numbers;
  }

  reset() {
    this.numbers = this.generateNumbers();
    this.attempts = 0;
    this.won = false;
    this.lost = false;
  }

  checkWin(userNumbers = []) {
    this.attempts++;

    userNumbers = userNumbers.map((num) => num.value);

    const userNums = new UserNumbers(userNumbers);

    if (userNums.length !== this.numbers.length) {
      return false;
    }

    for (let i = 0; i < userNums.length; i++) {
      if (userNums.values[i] === this.numbers[i]) {
        return true;
      }
    }
    return false;
  }

  getAttempts() {
    return this.attempts;
  }

  getNumbers() {
    return this.numbers;
  }
}
