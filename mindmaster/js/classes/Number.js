export default class Number {
  value = null;

  constructor(value) {
    this.value = value;
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getValue() {
    return this.value;
  }

  setValue(value) {
    this.value = value;
  }
}
