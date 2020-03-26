import pad from '@lcf.vs/generics/lib/utils/number/pad.js'
import weekOfDay from '@lcf.vs/generics/lib/temporal/weekOfDay.js'

export default function toW3CWeekString (date) {
  const [year, week] = weekOfDay(date)

  return `${pad(year, 4)}-W${pad(week)}`
}
