const assert = require('assert')
const urls = [
  'http://coooooolsite.com',
  'https://valid-secure-url',
  'hdtps://virus.com.exe',
  'http//bananas-bananas.com',
  'https://edition.cnn.com/',
  'http://this-is-an-site',
  'http://www.google.com',
  'http:/invalid-url',
  'https://www.voanews.com/',
]

const response = [
  'valid-insecure',
  'valid-secure',
  'invalid-url',
  'invalid-url',
  'valid-secure',
  'valid-insecure',
  'valid-insecure',
  'invalid-url',
  'valid-secure',
]
function validUrl() {
  // your answer here
  return  urls.map(url => {
    if (url.includes('http://')) return 'valid-insecure'
    if (url.includes('https://')) return 'valid-secure'
    return 'invalid-url'
  })
}

assert.deepStrictEqual(validUrl(), response);


