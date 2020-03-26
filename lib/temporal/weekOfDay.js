import addDays from '@lcf.vs/generics/lib/temporal/addDays.js'
import firstDayOfJanuary from '@lcf.vs/generics/lib/temporal/firstDayOfJanuary.js'
import midnight from '@lcf.vs/generics/lib/temporal/midnight.js'

export default function weekOfDay (date) {
  const base = midnight(date)
  const thursday = addDays(base, 4 - (base.getDay() || 7))
  const year = thursday.getFullYear()

  return [
    year,
    Math.ceil((((thursday - firstDayOfJanuary(year)) / 86400000) + 1) / 7)
  ]
}
