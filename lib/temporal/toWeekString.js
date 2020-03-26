import pad from '@lcf.vs/generics/lib/temporal/utils/number/pad.js'
import clone from '@lcf.vs/generics/lib/temporal/clone.js'
import weekOfDay from '@lcf.vs/generics/lib/temporal/weekOfDay.js'

export default function toWeekString (date) {
  return pad(weekOfDay(date).pop())
}
