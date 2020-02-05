import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './store';

// ここに追加したぶんだけ初期値が増える
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

serviceWorker.unregister();
