import { decorate, observable, computed } from "mobx";

class NumberStore {
  constructor() {
    this.counter = 0;
  }

  incrementCounter() {
    this.counter++;
  }

  decrementCounter() {
    this.counter--;
  }

  multiplyCounterByFive() {
    this.counter = this.counter * 5;
  }

  get double() {
    return this.counter * 2;
  }
}

decorate(NumberStore, {
  counter: observable,
  double: computed
});
export default new NumberStore();
