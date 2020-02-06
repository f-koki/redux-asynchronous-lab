import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { actionIncrement, actionRequestPostcodeAsync, actionDecrement } from './action';

function App({
  count,
  response,
  onIncrementClick,
  onDecrementClick,
  onChangePostCodeClick
}) {
  return (
    <div className="App">
      <div>{count}</div>
      <div>{JSON.stringify(response)}</div>
      <button onClick={onIncrementClick}>increment</button>
      <button onClick={onDecrementClick}>decrement</button>
      <button onClick={onChangePostCodeClick}>change postcode</button>
    </div>
  )
}

function mapStateToProps(store) {
  return {
    count: store.count,
    response: store.response
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementClick: () => {
      dispatch(actionIncrement(1))
    },
    onDecrementClick: () => {
      dispatch(actionDecrement(1))
    },
    onChangePostCodeClick: () => {
      dispatch(actionRequestPostcodeAsync(1670051))
    }
  }
}

export default connect(
  // このコンポーネントにstoreから渡したいstateはこちら
  mapStateToProps,
  // このコンポーネントで実行したいactionの記述はこちら
  mapDispatchToProps
)(App);
