var test = require('tape').test
var crypto = require('crypto')
var shapeshift = require('../')

test('should get a list of transactions by an API key', function (t) {
  t.plan(3)
  var somePrivKey = crypto.randomBytes(32).toString('hex')
  console.log(somePrivKey)
  shapeshift.transactions(somePrivKey, function (err, data) {
    console.log(data, 'THIS IS CONSOLE LOG')
    t.ifError(err, 'no error')
    t.true(Array.isArray(data), 'data is an array')
    t.same(data.length, 0, 'no data returned')
    t.end()
  })
})
