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

  multiplyCounter() {
    this.counter = this.counter * 5;
  }

  get multiplyCounter2() {
    return this.counter * 2;
  }
}

decorate(NumberStore, {
  counter: observable,
  multiplyCounter2: computed
});
export default new NumberStore();
