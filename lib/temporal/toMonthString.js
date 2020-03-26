import pad from '../utils/number/pad.js'
import clone from './clone.js'

export default function toMonthString (date) {
  return pad(clone(date).getMonth() + 1)
}
