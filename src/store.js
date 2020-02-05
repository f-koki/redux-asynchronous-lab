import { reducer } from "./reducer"
import { createStore } from "redux"

export const initialState = {
  count: 0,
  response: {}
}

// storeの中にreducerがある
// reducerはactionをdispatchすることで実行される
// そうなると、storeのstateが変更する
export const store = createStore(reducer)