import { reducer } from "./reducer"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"

export const initialState = {
  count: 0,
  response: {}
}

// storeの中にreducerがある
// reducerはactionをdispatchすることで実行される
// そうなると、storeのstateが変更する
export const store = createStore(reducer, applyMiddleware(thunk))