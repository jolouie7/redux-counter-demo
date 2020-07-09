import React, { useState } from "react";
import {connect} from "react-redux";
import increment from "../actions/Increment"
import decrement from "../actions/Decrement"

const Counter = (props) => {

  const increment = () => {
    props.dispatch(increment());
  };

  const decrement = () => {
    props.dispatch(decrement());
  };

  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button onClick={decrement}>-</button>
        <span>{props.count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count
})

export default connect(mapStateToProps)(Counter);
