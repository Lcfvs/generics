import withMinutes from '@lcf.vs/generics/lib/temporal/withMinutes.js'

export default function addMinutes (date, minutes) {
  return withMinutes(date, date.getMinutes() + minutes)
}
