import { all, call, fork, take, put } from "redux-saga/effects"
import { actionChangePostcode, actionChangeResponse } from "./action"
import { getPostcodeInfoSaga } from "./api"

function* requestPostcode() {
  while (true) {
    // アクションを受け取ったら開始する
    // ☓ メソッド名で検索しても出てこない
    const action = yield take(actionChangePostcode().type)
    const response = yield call(getPostcodeInfoSaga, action.payload)
    if (response) {
      yield put(actionChangeResponse(response))
    }
  }
}

export default function* rootSage() {
  // yield fork(requestPostcode) 単数であればこちらでもOK
  yield all([requestPostcode()])
}