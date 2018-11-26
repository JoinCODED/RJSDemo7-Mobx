1. Move states into App:

```javascript
constructor(props){
  super(props);
  this.state = {
    counter = 0
  };
  this.handleIncrement = this.handleIncrement.bind(this);
  this.handleDecrement = this.handleDecrement.bind(this);
}

handleIncrement() {
  this.setState({ counter: this.state.counter + 1 });
}

handleDecrement() {
  this.setState({ counter: this.state.counter - 1 });
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

4. Install mobx:

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
class NumberStore {
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
decorate(NumberStore, {
  counter: observable,
  double: computed
});
```

10. Import the store in `App` and use the `multiplyCounterByFive` method:

```javascript
import Store from "./Stores/numberStore";

<div className="row">
  <button
    className="btn btn-lg btn-block btn-outline-light"
    onClick={() => Store.multiplyCounterByFive()}
  >
    Multiply by 5
  </button>
</div>;
```

11. Update `Component1` and `Component2`:

```javascript
import Store from "./Stores/numberStore";

  <p>{Store.counter}</p>
  <button
    className="btn btn-lg btn-outline-dark"
    onClick={() => Store.incrementCounter()}
  >
```

12. Use `getter` method in `App`:

```javascript

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>{Store.double}</p>
        <div className="row">
        ...
```
