import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { actionIncrement, actionChangePostcode } from '.';

function App({
  count,
  response,
  onIncrementClick,
  onChangePostCodeClick
}) {
  return (
    <div className="App">
      <div>{count}</div>
      <div>{JSON.stringify(response)}</div>
      <button onClick={onIncrementClick}>increment</button>
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
    onChangePostCodeClick: () => {
      dispatch(actionChangePostcode())
    }
  }
}

export default connect(
  // このコンポーネントにstoreから渡したいstateはこちら
  mapStateToProps,
  // このコンポーネントで実行したいactionの記述はこちら
  mapDispatchToProps
)(App);
