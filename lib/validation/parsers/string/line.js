import pattern from './pattern.js'

const parser = pattern({
  pattern: `^[^\r\n]+$`,
  type: 'line'
})

export default function line () {
  return parser
}
