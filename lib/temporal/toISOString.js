import clone from './clone.js'

export default function toISOString (date) {
  return clone(date).toISOString()
}
