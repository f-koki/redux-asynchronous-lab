import { getPostcodeInfo } from './api'

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


/**
 * for thunk
 */
export function actionRequestPostcodeAsync(postcode) {
  // 非同期でstoreの状態を変える！
  return dispatch => { getPostcodeInfo(dispatch, postcode) }
}
export function actionChangeResponse(response) {
  return {
    type: 'CHANGE_RESPONSE',
    response
  }
}

/**
 * for saga
 */
export function actionChangePostcode(postcode) {
  return {
    type: 'CHANGE_POSTCODE',
    payload: postcode
  }
}