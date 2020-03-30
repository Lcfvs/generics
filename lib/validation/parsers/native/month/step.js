import diff from '../../../../types/date/diff.js'
import fromMonth from '../../../../types/date/fromMonth.js'
import number from '../../../../types/number/number.js'

export default function step ({
  min,
  step = 1
}) {
  const to = {
    min: fromMonth(min),
    step: number.parse(step)
  }

  return async value => {
    const { years, months } = diff(to.min, fromMonth(value))

    if ((years * 12 + months) % to.step === 0) {
      return value
    }

    throw new TypeError('must be a month multiple')
  }
}
