import { initialState } from "./index"

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
    case 'CHANGE_RESPONSE': {
      return {
        ...state,
        response: action.response
      }
    }
    default: {
      return state
    }
  }
}