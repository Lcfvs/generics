import fromTimestamp from './fromTimestamp.js'
import toTimestamp from './toTimestamp.js'

export default function parse (date) {
  return fromTimestamp(toTimestamp(date))
}
