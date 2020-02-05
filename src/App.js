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

function mapStateToProps(store) {
  return {
    count: store.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementClick: () => {
      dispatch({ type: 'INCREMENT' })
    }
  }
}

export default connect(
  // このコンポーネントにstoreから渡したいstateはこちら
  mapStateToProps,
  // このコンポーネントで実行したいactionの記述はこちら
  mapDispatchToProps
)(App);
