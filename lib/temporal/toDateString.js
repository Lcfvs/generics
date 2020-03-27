import pad from '../utils/number/pad.js'
import clone from './clone.js'

export default function toDateString (date) {
  return pad(clone(date).getDate())
}
