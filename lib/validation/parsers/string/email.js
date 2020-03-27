import pattern from './pattern.js'

const parser = pattern({
  pattern: `^[a-zA-Z0-9.!#$%&'*+\\/=?^_\`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$`,
  type: 'W3C email'
})

export default function email () {
  return parser
}
