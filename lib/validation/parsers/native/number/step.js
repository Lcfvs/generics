import parse from '../../../../types/number/parse.js'

export default function step ({
  min,
  step
}) {
  const to = {
    min: parse(min),
    step: parse(step)
  }

  return async value => {
    if ((value - to.min) % to.step === 0) {
      return value
    }

    throw new TypeError('must be a number step multiple')
  }
}
