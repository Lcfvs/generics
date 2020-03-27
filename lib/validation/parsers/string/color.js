import pattern from './pattern.js'

const parser = pattern({
  pattern: `^#[a-z\d]{6}$`,
  type: 'W3C color'
})

export default function color () {
  return parser
}
