var request = require('request')

async function get (url, callback) {
  await request.get({url: url, json: true})
}

async function post (url, postData, callback) {
  await request.post({url: url, json: true, body: postData}).auth(null, null, true, postData.apiKey)
}

module.exports = {
  get: get,
  post: post
}
