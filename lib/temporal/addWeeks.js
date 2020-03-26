import addDays from '@lcf.vs/generics/lib/temporal/addDays.js'

export default function addWeeks (date, weeks) {
  return addDays(date, weeks * 7)
}
