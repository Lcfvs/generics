import pad from '../utils/number/pad.js'
import clone from './clone.js'

export default function toMinutesString (date) {
  return pad(clone(date).getMinutes())
}
