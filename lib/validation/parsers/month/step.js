import fromW3CMonthString from '../../../temporal/fromW3CMonthString.js'

function calc (date) {
  return date.getFullYear() * 12 + date.getMonth()
}

export default function step ({
  min,
  step
}) {
  const multiple = +step
  const month = calc(fromW3CMonthString(min))

  return async value => {
    if ((calc(value) - month) % multiple === 0) {
      return value
    }

    throw new TypeError('must be a W3C month step multiple')
  }
}
