import pad from '../number/pad.js'
import toW3CMonth from './toW3CMonth.js'

export default function toW3CDate (date) {
  const month = toW3CMonth(date)
  const days = pad(date.getDate())

  return `${month}-${days}`
}
