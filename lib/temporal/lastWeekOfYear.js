import lastDayOfDecember from '@lcf.vs/generics/lib/temporal/lastDayOfDecember.js'
import weekOfDay from '@lcf.vs/generics/lib/temporal/weekOfDay.js'

export default function lastWeekOfYear (date) {
  const copy = lastDayOfDecember(date)
  const [year, week] = weekOfDay(copy)

  return week === 1
    ? weekOfDay(copy.setDate(24))
    : [year, week]
}
