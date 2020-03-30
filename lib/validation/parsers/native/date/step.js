import toTimestamp from '../../../../types/date/toTimestamp.js'
import parse from '../../../../types/number/parse.js'

export default function step ({
  min,
  step = 1
}) {
  const to = {
    min: toTimestamp(min),
    step: parse(step)
  }

  return async value => {
    if ((value - to.min) % to.step === 0) {
      return value
    }

    throw new TypeError('must be a date step multiple')
  }
}
