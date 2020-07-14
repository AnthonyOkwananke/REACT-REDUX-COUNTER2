import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
import Counter from './Counter'
import { Provider } from 'react-redux'


const initialState = {
  count: 0
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}
const store = createStore(reducer);
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

// const App = () => (
//   <Provider store={store}>
//     <Counter />
//   </Provider>
// );

// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
// );

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Counter />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
