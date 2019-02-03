Discussion: https://docs.google.com/presentation/d/1XJNn0vFr_SXXnKU-D1J0lgJxRJgfwhR0A6R-Rl7T-9s/edit#slide=id.p

1.  Move states into App:

    ```javascript
    state = {
      counter: 0
    };

    handleIncrement = () => {
      let newCounter = this.state.counter + 1;
      this.setState({ counter: newCounter });
    };

    handleDecrement = () => {
      let newCounter = this.state.counter - 1;
      this.setState({ counter: newCounter });
    };
    ```

2.  Send states to `Component1` & `Component2`:

    ```javascript

    <Component1
      counter={this.state.counter}
      handleIncrement={this.handleIncrement}
    />
    <Component2
      counter={this.state.counter}
      handleDecrement={this.handleDecrement}
    />

    ```

3.  Call states through props:

    ```javascript
    class Component1 extends Component {
      render() {
        return (
          <div className="col-lg-6">
            <div className="component">
              <p>COMPONENT 1</p>
              <p>{this.props.counter}</p>
              <button
                className="btn btn-lg btn-outline-dark"
                onClick={() => this.props.handleIncrement()}
              >
                Increment
              </button>
            </div>
          </div>
        );
      }
    }

    class Component2 extends Component {
      render() {
        return (
          <div className="col-lg-6">
            <div className="component">
              <p>COMPONENT 2</p>
              <p>{this.props.counter}</p>
              <button
                className="btn btn-lg btn-outline-dark"
                onClick={() => this.props.handleDecrement()}
              >
                Decrement
              </button>
            </div>
          </div>
        );
      }
    }
    ```

4.  Install MobX:

    ```shell
    $ yarn add mobx
    $ yarn add mobx-react
    ```

5.  Create a folder call it **stores** and a `counterStore` file

6.  Define a class with a counter property:

    ```javascript
    class CounterStore {
      counter = 0;
    }
    ```

7.  Define the methods inside the class:

    ```javascript
    incrementCounter = () => this.counter++;

    decrementCounter = () => this.counter--;
    ```

8.  Import and use `decorate` and `observable` and then export the store:

    ```javascript
    import { decorate, observable } from "mobx";

    ...

    decorate(CounterStore, {
      counter: observable,
    });

    export default new CounterStore();

    ```

9.  Update `Component1` and `Component2`:

    ```javascript
    import counterStore from "./stores/counterStore";

      <p>{counterStore.counter}</p>
      <button
        className="btn btn-lg btn-outline-dark"
        onClick={() => counterStore.incrementCounter()}
      >
    ```

    When clicking, nothing changes. That is because these components are not observers yet.

10. Make the components `observer`s:

    ```javascript
    import { observer } from "mobx-react";

    ...

    export default observer(Component1);

    ```

11. Inside the `counterStore`, add a `getter` method to show what we use the `computed` import for:

    ```javascript
    import { decorate, observable, computed } from "mobx";

    class CounterStore {

      ...

      get double() {
        return this.counter * 2;
      }
    }

    decorate(CounterStore, {
      counter: observable,
      double: computed
    });

    export default new CounterStore();
    ```

12. Use the `double` computed property in `App`. Explain that we call it as if it was a variable:

    ```javascript

    class App extends Component {
      render() {
        return (
          <div className="App">
            <p>{counterStore.double}</p>
            <div className="row">
            ...
    ```

13. Create a `multiplyCounterByFive` method inside the `CounterStore`:

        ```javascript
        multiplyCounterByFive() {
          this.counter = this.counter * 5;
        }
        ```

    Explain how the `multiplyCounterByFive` is different that the computed `double` method. `multiplyCounterByFive` CHANGES the value of the state of the store, `double` DEPENDS on a value of counter, and is run whenever the counter changes.

14. Import the store in `App` and use the `multiplyCounterByFive` method:

    ```javascript
    import counterStore from "./store/counterStore";

    <div className="row">
      <button
        className="btn btn-lg btn-block btn-outline-light"
        onClick={counterStore.multiplyCounterByFive}
      >
        Multiply by 5
      </button>
    </div>;
    ```
