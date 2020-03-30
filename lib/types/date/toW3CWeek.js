import pad from '../number/pad.js'
import toWeek from './toWeek.js'

export default function toW3CWeek (date) {
  const [years, week] = toWeek(date)

  return `${pad(years, 4)}-W${pad(week)}`
}
