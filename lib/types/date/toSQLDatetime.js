import toISO from './toISO.js'

export default function toSQLDatetime (date) {
  return toISO(date).replace('T', ' ').split('.')[0]
}
