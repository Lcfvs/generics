import pad from '../utils/number/pad.js'
import clone from './clone.js'
import weekOfDay from './weekOfDay.js'

export default function toWeekString (date) {
  return pad(weekOfDay(date).pop())
}
