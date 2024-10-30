import React, { Component } from "react";

interface ClassCounterProps {}

interface ClassCounterState {
  counter: number;
  index: number;
}

class ClassCounter extends Component<ClassCounterProps, ClassCounterState> {
  constructor(props: ClassCounterProps) {
    super(props);

    this.state = {
      counter: 0,
      index: 100,
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    console.log("before", this.state.counter);

    this.setState((s) => {
      return {
        counter: s.counter + 1,
      };
    });
  }

  decrement = () => {
    this.setState((s) => {
      return {
        index: s.index - 1,
      };
    });
  };

  componentDidUpdate(
    prevProps: Readonly<ClassCounterProps>,
    prevState: Readonly<ClassCounterState>,
    snapshot?: any,
  ) {
    if (prevState.counter !== this.state.counter) {
      console.log("after", this.state.counter);
    }
  }

  render() {
    return (
      <div>
        <h3>Class Counter Component</h3>
        <h4>Counter: {this.state.counter}</h4>
        <h4>Index: {this.state.index}</h4>

        <button className="btn btn-primary me-4" onClick={this.increment}>
          Increment
        </button>

        <button className="btn btn-primary" onClick={this.decrement}>
          Decrement
        </button>
      </div>
    );
  }
}

export default ClassCounter;
