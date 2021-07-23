/**
 * @typedef {import('hast').Root} Root
 * @typedef {Root|Root['children'][number]} Node
 */

/**
 * Rank of a heading: H1 -> 1, H2 -> 2, etc.
 *
 * @param {Node} node
 * @returns {number|null}
 */
export function headingRank(node) {
  const name =
    (node && node.type === 'element' && node.tagName.toLowerCase()) || ''
  const code =
    name.length === 2 && name.charCodeAt(0) === 104 /* `h` */
      ? name.charCodeAt(1)
      : 0
  return code > 48 /* `0` */ && code < 55 /* `7` */ ? code - 48 /* `0` */ : null
}
