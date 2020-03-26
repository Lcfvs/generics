import pad from '../utils/number/pad.js'
import clone from './clone.js'

export default function toSecondsString (date) {
  return pad(clone(date).getSeconds())
}
