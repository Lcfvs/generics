import toSQLDatetime from './toSQLDatetime.js'

export default function toSQLTime (date) {
  return toSQLDatetime(date).split(' ')[1]
}
