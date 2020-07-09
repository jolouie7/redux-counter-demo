// function doStuff() {
//   return function (dispatch, getState) {
// dispatch actions here
// or fetch data
// or whatever
//   };
// }

// * Most of the time you’ll only need dispatch, but sometimes you want to do something conditionally, based on some value in the Redux state.
// * In that case, call getState() and you’ll have the entire state to read as needed.

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
