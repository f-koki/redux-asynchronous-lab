const API_BASE = 'http://zipcloud.ibsnet.co.jp/api/search?zipcode='

export function user(postcode) {
  return fetch(API_BASE + postcode)
    .then(res => res.json())
    .catch(error => { error })
}