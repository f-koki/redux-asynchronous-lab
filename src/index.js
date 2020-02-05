import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  count: 0,
  response: {}
}

// actions
export function actionIncrement(count) {
  return {
    type: 'INCREMENT',
    count
  }
}

export function actionDecrement(count) {
  return {
    type: 'DECREMENT',
    count
  }
}

export function actionChangePostcode() {
  return {
    type: 'CHANGE_POSTCODE'
  }
}


// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        ...state,
        count: state.count + 1
      }
    }
    case 'DECREMENT': {
      return {
        ...state,
        count: state.count - 1
      }
    }
    case 'CHANGE_POSTCODE': {
      
      return {
        ...state,
      }
    }
    default: {
      return state
    }
  }
}

// storeの中にreducerがある
// reducerはactionをdispatchすることで実行される
// そうなると、storeのstateが変更する
const store = createStore(reducer)

// ここに追加したぶんだけ初期値が増える
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

serviceWorker.unregister();
