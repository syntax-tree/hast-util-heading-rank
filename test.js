import test from 'tape'
import {h} from 'hastscript'
import {headingRank} from './index.js'

test('headingRank', (t) => {
  // @ts-ignore runtime.
  t.equal(headingRank(), null, 'should return null for non-nodes')

  t.equal(
    // @ts-ignore runtime.
    headingRank({type: 'text', value: '!'}),
    null,
    'should return null for non-elements'
  )

  t.equal(headingRank(h('p', '!')), null, 'should return null for non-headings')

  t.equal(headingRank(h('h5', '!')), 5, 'should return the rank of a heading')

  t.end()
})
