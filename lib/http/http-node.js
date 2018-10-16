var request = require('request')

function get (url, callback) {
  request.get({url: url, json: true}, function (err, resp, data) {
    if (err) return callback(err)
    if (resp.statusCode !== 200) return callback(new Error('HTTP status code: ' + resp.statusCode))
    callback(null, data)
  })
}

function post (url, postData, callback) {
  request.post({url: url, json: true, body: postData}, function (err, resp, data) {
    console.log(err, "THIS IS HTTP NODE ERROR");
    console.log(data, "THIS IS DATA HTTP NODE");
    if (data.error) return callback(data.error)
    if (err) return callback(err)
    if (resp.statusCode !== 200) return callback(new Error('HTTP status code: ' + resp.statusCode))
    callback(null, data)
  }).auth(null, null, true, postData.apiKey)
}

module.exports = {
  get: get,
  post: post
}
