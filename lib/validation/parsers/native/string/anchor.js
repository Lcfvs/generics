import pattern from './pattern.js'

const parse = pattern({
  pattern: /^#[a-zA-Z\d]+$/,
  type: 'anchor'
})

export default function anchor () {
  return parse
}
