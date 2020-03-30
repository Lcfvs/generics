import pad from '../number/pad.js'
import parse from './parse.js'

export default function toW3CMonth (date) {
  const copy = parse(date)
  const year = pad(copy.getFullYear(), 4)
  const month = pad(copy.getMonth() + 1)

  return `${year}-${month}`
}
