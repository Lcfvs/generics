import number from '../number/number.js'

export default function isDate (date) {
  return Date.prototype.isPrototypeOf(date) &&
    number.parse(+date)
}
