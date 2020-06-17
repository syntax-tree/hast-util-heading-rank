'use strict'

var test = require('tape')
var h = require('hastscript')
var rank = require('.')

test('rank', function (t) {
  t.equal(rank(), null, 'should return null for non-nodes')

  t.equal(
    rank({type: 'text', value: '!'}),
    null,
    'should return null for non-elements'
  )

  t.equal(rank(h('p', '!')), null, 'should return null for non-headings')

  t.equal(rank(h('h5', '!')), 5, 'should return the rank of a heading')

  t.end()
})
