import addDays from './addDays.js'

export default function addWeeks (date, weeks) {
  return addDays(date, weeks * 7)
}
