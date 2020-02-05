import { initialState } from "./store"

export const reducer = (state = initialState, action) => {
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