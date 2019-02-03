Discussion: https://docs.google.com/presentation/d/1XJNn0vFr_SXXnKU-D1J0lgJxRJgfwhR0A6R-Rl7T-9s/edit#slide=id.p

1. Move states into App:

```javascript
constructor(props){
  super(props);
  this.state = {
    counter : 0
  };
  this.handleIncrement = this.handleIncrement.bind(this);
  this.handleDecrement = this.handleDecrement.bind(this);
}

handleIncrement() {
  let newCounter = this.state.counter + 1;
  this.setState({ counter: newCounter });
}

handleDecrement() {
  let newCounter = this.state.counter - 1;
  this.setState({ counter: newCounter });
}

```

2. Send states to **Component1** & **Component2**:

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

3. Call states through props:

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
            onClick={() => this.props.handleIncrement()}
          >
            Increment
          </button>
        </div>
      </div>
    );
  }
}
```

4. Install MobX:

```javascript

yarn add mobx

yarn add mobx-react

```

5. Create a folder call it **Stores** and a store file

6. Import the following in the store:

```javascript
import { decorate, observable, computed } from "mobx";
```

7. Define your class and constructor:

```javascript


class CounterStore {
  constructor() {
    this.counter = 0;
  }
}
```

8. Define the methods inside the class:

```javascript

incrementCounter() {
  this.counter++;
}

decrementCounter() {
  this.counter--;
}

```
9. Use decorate and then export the store:

```javascript
import { decorate, observable, computed } from "mobx";

...

decorate(CounterStore, {
  counter: observable,
});
export default new CounterStore();

```


10. Update `Component1` and `Component2`:

```javascript
import Store from "./Stores/CounterStore";

  <p>{Store.counter}</p>
  <button
    className="btn btn-lg btn-outline-dark"
    onClick={() => Store.incrementCounter()}
  >
```

When clicking, nothing changes. That is because these components are not observers yet. 

11. Add observer in components 1 and 2:

```javascript
import { observer } from "mobx-react";

...

export default observer(Component1);

```

12.  Inside the `CounterStore`, add a `getter` method to show what we use the "computed" import for:
```javascript
get double() {
    return this.counter * 2;
  }
decorate(CounterStore, {
  counter: observable,
  double: computed
});
export default new CounterStore();
```

13. Use the `getter` `double()` method in `App`. Explain that we call it as if it was a variable:

```javascript

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>{Store.double}</p>
        <div className="row">
        ...
   ```

14. Create a `multiplyCounterByGive()` method inside the `CounterStore`:

	```javascript
	multiplyCounterByFive() {
	  this.counter = this.counter * 5;
	}
	```
Explain how the `multiplyCounterByFive()` is different that the computed `double()` method. `multiplyCounterByFive()` CHANGES the value of the state of the store, `double()` DEPENDS on a value of counter, and is run whenever the counter changes. 
	
15.  Import the store in `App` and use the `multiplyCounterByFive` method:
	
	```javascript
	import Store from "./Stores/CounterStore";
	
	<div className="row">
	  <button
	    className="btn btn-lg btn-block btn-outline-light"
	    onClick={() => Store.multiplyCounterByFive()}
	  >
	    Multiply by 5
	  </button>
	</div>;
	```
