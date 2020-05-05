import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { increment, decrement, reset } from "./JS/actions/actions";


function App({ counter, increment, decrement, reset }) {
  return (
    <div className="App">
      <button variant="success" onClick={() => increment()}>
        +
      </button>
      <span>{counter}</span>
      <button variant="danger" onClick={() => decrement()}>
        -
      </button>
      <button variant="dark" onClick={() => reset()}>
        Reset
      </button>
    </div>
  );
}
const mapStateToProps = state => {
  return { counter: state.counter };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset())
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(App);
