import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { reducer } from "./reducer"
import { createStore, applyMiddleware } from "redux"
// import thunk from "redux-thunk"
import createSagaMiddleware from 'redux-saga'
import rootSage from './sagas';

export const initialState = {
  count: 0,
  response: {}
}

// storeの中にreducerがある
// reducerはactionをdispatchすることで実行される
// そうなると、storeのstateが変更する
// export const store = createStore(reducer, applyMiddleware(thunk))

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSage)

// ここに追加したぶんだけ初期値が増える
// エントリーポイントだから、ここから処理が始まる
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

serviceWorker.unregister();
