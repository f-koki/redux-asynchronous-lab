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

export function actionRequestPostcodeAsync(postcode) {
  // 非同期でstoreの状態を変える！
  return dispatch => {
    fetch('http://zipcloud.ibsnet.co.jp/api/search?zipcode=' + postcode)
      .then(res => res.json())
      .then(json => dispatch(actionChangeResponse({ json })))
      .catch(err => dispatch(actionChangeResponse({ err })))
  }
}

export function actionChangeResponse(response) {
  return {
    type: 'CHANGE_RESPONSE',
    response
  }
}