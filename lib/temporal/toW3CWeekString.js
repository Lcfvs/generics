import pad from '../utils/number/pad.js'
import weekOfDay from './weekOfDay.js'

export default function toW3CWeekString (date) {
  const [year, week] = weekOfDay(date)

  return `${pad(year, 4)}-W${pad(week)}`
}
