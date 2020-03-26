import withYear from '@lcf.vs/generics/lib/temporal/withYear.js'

export default function addYears (date, years) {
  return withYear(date, years)
}
