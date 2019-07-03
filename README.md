Discussion: https://docs.google.com/presentation/d/1XJNn0vFr_SXXnKU-D1J0lgJxRJgfwhR0A6R-Rl7T-9s/edit#slide=id.p

1. Move states into App:

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

2. Send states to `Component1` & `Component2`:

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

3. Change `Component1` and `Component2` to functional components

4. Call states through props:

   ```javascript
   function Component1(props) {
     render() {
       return (
         <div className="col-lg-6">
           <div className="component">
             <p>COMPONENT 1</p>
             <p>{props.counter}</p>
             <button
               className="btn btn-lg btn-outline-dark"
               onClick={props.handleIncrement}
             >
               Increment
             </button>
           </div>
         </div>
       );
     }
   }

   function Component2(props) {
     render() {
       return (
         <div className="col-lg-6">
           <div className="component">
             <p>COMPONENT 2</p>
             <p>{props.counter}</p>
             <button
               className="btn btn-lg btn-outline-dark"
               onClick={props.handleDecrement}
             >
               Decrement
             </button>
           </div>
         </div>
       );
     }
   }
   ```

5. Install MobX:

   ```shell
   $ yarn add mobx
   $ yarn add mobx-react
   ```

6. Create a folder call it **stores** and a `counterStore` file

7. Define a class with a counter property:

   ```javascript
   class CounterStore {
     counter = 0;
   }
   ```

8. Define the methods inside the class:

   ```javascript
   incrementCounter = () => this.counter++;

   decrementCounter = () => this.counter--;
   ```

9. Import and use `decorate` and `observable` and then export the store:

   ```javascript
   import { decorate, observable } from "mobx";

   ...

   decorate(CounterStore, {
     counter: observable,
   });

   export default new CounterStore();

   ```

10. Update `Component1` and `Component2`:


    ```javascript
    import counterStore from "./stores/counterStore";

      <p>{counterStore.counter}</p>
      <button
        className="btn btn-lg btn-outline-dark"
        onClick={counterStore.incrementCounter}
      >
    ```

    When clicking, nothing changes. That is because these components are not observers yet.

11. Make the components `observer`s:

    ```javascript
    import { observer } from "mobx-react";

    ...

    export default observer(Component1);

    ```

12. Inside the `counterStore`, add a `getter` method to show what we use the `computed` import for:

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

13. Use the `double` computed property in `App`. Explain that we call it as if it was a variable:

    ```javascript

    class App extends Component {
      render() {
        return (
          <div className="App">
            <p>{counterStore.double}</p>
            <div className="row">
            ...
    ```

14. Create a `multiplyCounterByFive` method inside the `CounterStore`:

        ```javascript
        multiplyCounterByFive() {
          this.counter = this.counter * 5;
        }
        ```

    Explain how the `multiplyCounterByFive` is different that the computed `double` method. `multiplyCounterByFive` CHANGES the value of the state of the store, `double` DEPENDS on a value of counter, and is run whenever the counter changes.

15. Import the store in `App` and use the `multiplyCounterByFive` method:

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
