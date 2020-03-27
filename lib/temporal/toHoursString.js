import pad from '../utils/number/pad.js'
import clone from './clone.js'

export default function toHoursString (date) {
  return pad(clone(date).getHours())
}
