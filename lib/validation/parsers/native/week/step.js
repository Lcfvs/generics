import fromWeek from '../../../../types/date/fromWeek.js'
import number from '../../../../types/number/number.js'

const week = 7 * 24 * 60 * 60 * 1000

export default function step ({
  min,
  step = 1
}) {
  const to = {
    min: fromWeek(min),
    step: number.parse(step) * week
  }

  return async value => {
    if ((fromWeek(value) - to.min) % to.step === 0) {
      return value
    }

    throw new TypeError('must be a week multiple')
  }
}
