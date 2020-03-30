import fromW3CDate from '../../../../types/date/fromW3CDate.js'
import date from '../../native/date/date.js'

const parser = date.type()
const parse = value => parser(fromW3CDate(value))

export default function type () {
  return parse
}
