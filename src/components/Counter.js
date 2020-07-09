import React, { useState } from "react";
import {connect} from "react-redux";
import increment from "../actions/Increment"
import decrement from "../actions/Decrement"

const Counter = (props) => {

  const increment = () => {
    props.increment();
  };

  const decrement = () => {
    props.decrement();
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

// in this object, keys become prop names,
// and values should be action creator functions.
// They get bound to `dispatch`.
const mapDispatchToProps = {
  increment,
  decrement
};

// mapDispatchToProps as a function
// * YOU PROBABLY DON'T NEED THIS IN MOST CASES - https://daveceddia.com/redux-mapdispatchtoprops-object-form/
// const mapDispatchToProps = dispatch => ({
//   signIn: (e, userInfo, history) => dispatch(signIn(e, userInfo, history))
// });

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
