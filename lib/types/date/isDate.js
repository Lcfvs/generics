export default function isDate (date) {
  return Date.prototype.isPrototypeOf(date) &&
    Number.isSafeInteger(+date)
}
