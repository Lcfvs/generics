import addDays from './addDays.js'
import firstDayOfJanuary from './firstDayOfJanuary.js'
import midnight from './midnight.js'

export default function weekOfDay (date) {
  const base = midnight(date)
  const thursday = addDays(base, 4 - (base.getDay() || 7))
  const year = thursday.getFullYear()

  return [
    year,
    Math.ceil((((thursday - firstDayOfJanuary(year)) / 86400000) + 1) / 7)
  ]
}
