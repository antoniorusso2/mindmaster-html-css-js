import Number from "./Number.js";

export default class UserNumbers {
  values;

  length = 4;

  minValue = 1;
  maxValue = 9;

  constructor(values = [], minValue = 1, maxValue = 9, length = 4) {
    this.values = values;
    this.length = length;
    this.minValue = minValue;
    this.maxValue = maxValue;
  }
}
