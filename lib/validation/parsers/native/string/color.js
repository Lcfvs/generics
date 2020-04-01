import pattern from './pattern.js'

const parse = pattern({
  pattern: /^#[a-zd]{6}$/,
  type: 'color'
})

export default function color () {
  return parse
}
