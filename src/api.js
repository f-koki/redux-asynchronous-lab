import { actionChangeResponse } from "./action"

export function getPostcodeInfo(dispatch, postcode) {
  return fetch('http://zipcloud.ibsnet.co.jp/api/search?zipcode=' + postcode)
    .then(res => res.json())
    .then(json => { dispatch(actionChangeResponse(json)) })
    .catch(error => { dispatch(actionChangeResponse(error)) })
}
