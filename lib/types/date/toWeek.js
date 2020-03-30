import addDays from './addDays.js'
import newYear from './newYear.js'
import parse from './parse.js'

export default function toWeek (date) {
  const base = parse(date)
  const thursday = addDays(base, 4 - (base.getDay() || 7))
  const year = thursday.getFullYear()

  return [
    year,
    Math.ceil((((thursday - newYear(year)) / 86400000) + 1) / 7)
  ]
}
