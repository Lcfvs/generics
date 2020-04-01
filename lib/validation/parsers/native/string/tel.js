import pattern from './pattern.js'

const parser = pattern({
  pattern: /^\+d{6,20}$/,
  type: 'tel'
})

export default function tel () {
  return parser
}
