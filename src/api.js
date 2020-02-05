// TODO: これを非同期で叩いて、storeにセットしたい
export function getPostcodeInfo(postcode) {
  return fetch('http://zipcloud.ibsnet.co.jp/api/search?zipcode=' + postcode)
    .then(res => res.json())
    .then(json => {
      return json
    })
    .catch(error => {
      return error
    })
}
