import pad from '../utils/number/pad.js'
import clone from './clone.js'

export default function toYearString (date) {
  return pad(clone(date).getFullYear(), 4)
}
