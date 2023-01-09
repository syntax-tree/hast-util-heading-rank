import assert from 'node:assert/strict'
import test from 'node:test'
import {h} from 'hastscript'
import {headingRank} from './index.js'
import * as mod from './index.js'

test('headingRank', () => {
  assert.deepEqual(
    Object.keys(mod).sort(),
    ['headingRank'],
    'should expose the public api'
  )

  // @ts-expect-error runtime.
  assert.equal(headingRank(), null, 'should return null for non-nodes')

  assert.equal(
    headingRank({type: 'text', value: '!'}),
    null,
    'should return null for non-elements'
  )

  assert.equal(
    headingRank(h('p', '!')),
    null,
    'should return null for non-headings'
  )

  assert.equal(
    headingRank(h('h5', '!')),
    5,
    'should return the rank of a heading'
  )
})
