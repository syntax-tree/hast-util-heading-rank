import assert from 'node:assert/strict'
import test from 'node:test'
import {h} from 'hastscript'
import {headingRank} from './index.js'

test('headingRank', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(Object.keys(await import('./index.js')).sort(), [
      'headingRank'
    ])
  })

  await t.test('should return `undefined` for non-elements', async function () {
    assert.equal(headingRank({type: 'text', value: '!'}), undefined)
  })

  await t.test('should return `undefined` for non-headings', async function () {
    assert.equal(headingRank(h('p', '!')), undefined)
  })

  await t.test('should return the rank of a heading', async function () {
    assert.equal(headingRank(h('h5', '!')), 5)
  })
})
