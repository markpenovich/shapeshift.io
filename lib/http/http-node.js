var request = require('request')

function get (url, callback) {
  request.get({url: url, json: true})
}

function post (url, postData, callback) {
  request.post({url: url, json: true, body: postData}).auth(null, null, true, postData.apiKey)
}

module.exports = {
  get: get,
  post: post
}
