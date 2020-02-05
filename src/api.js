const API_BASE = 'http://zipcloud.ibsnet.co.jp/api/search?zipcode='

// TODO: これを非同期で叩いて、storeにセットしたい
export function user(postcode) {
  return fetch(API_BASE + postcode)
    .then(res => res.json())
    .catch(error => { error })
}
