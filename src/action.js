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

export function actionChangePostcode() {
  return {
    type: 'CHANGE_POSTCODE'
  }
}