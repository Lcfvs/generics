import pattern from './pattern.js'

const parse = pattern({
  pattern: /^[^\r\n]+$/,
  type: 'line'
})

export default function text () {
  return parse
}
