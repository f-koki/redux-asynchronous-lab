import React from 'react';
import './App.css';
import { connect } from 'react-redux';

function App({ count, onIncrementClick }) {
  return (
    <div className="App">
      <span>{count}</span>
      <button onClick={onIncrementClick}>increment</button>
    </div>
  )
}

export default connect(
  // このコンポーネントにstoreから渡したいstateはこちら
  state => {
    return {
      count: state.count,
      // onIncrementClick: state.onIncrementClick ここに書いてはいけない
    }
  },
  // このコンポーネントで実行したいactionの記述はこちら
  dispatch => {
    return {
      onIncrementClick: () => {
        dispatch({ type: 'INCREMENT' })
      }
    }
  }
)(App);
