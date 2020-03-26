import toTimestamp from './toTimestamp.js'

export default function clone (date) {
  return new Date(+toTimestamp(date))
}
