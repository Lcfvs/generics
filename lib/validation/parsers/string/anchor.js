import pattern from './pattern.js'

const parser = pattern({
  pattern: `^#[a-zA-Z-\d\.]+$`,
  type: 'W3C anchor'
})

export default function anchor () {
  return parser
}
