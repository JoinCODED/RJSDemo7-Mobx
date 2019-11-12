import { decorate, observable, computed } from "mobx";

class CounterStore {
  counter = 0;

  handleIncrement = () => this.counter++;

  handleDecrement = () => this.counter--;

  multiplyCounterByFive = () => (this.counter = this.counter * 5);

  get double() {
    return this.counter * 2;
  }
}

decorate(CounterStore, {
  counter: observable,
  double: computed
});

const counterStore = new CounterStore();

export default counterStore;
