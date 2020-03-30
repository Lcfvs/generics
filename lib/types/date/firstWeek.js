import newYear from './newYear.js'

export default function firstWeek (year) {
  return [
    newYear(year).getFullYear(),
    1
  ]
}
