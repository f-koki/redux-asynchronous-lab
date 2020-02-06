import { actionChangeResponse } from "./action"

// for thunk
export function getPostcodeInfo(dispatch, postcode) {
  return fetch('http://zipcloud.ibsnet.co.jp/api/search?zipcode=' + postcode)
    .then(res => res.json())
    .then(json => { dispatch(actionChangeResponse(json)) })
    .catch(error => { dispatch(actionChangeResponse(error)) })
}

// for saga
export function getPostcodeInfoSaga(postcode) {
  return fetch('http://zipcloud.ibsnet.co.jp/api/search?zipcode=' + postcode)
    .then(res => res.json())
    .catch(error => {
      return { error }
    })
}

