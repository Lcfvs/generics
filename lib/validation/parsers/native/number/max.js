import parse from '../../../../types/number/parse.js'

export default function max ({
  max
}) {
  const to = {
    max: parse(max)
  }

  return async value => {
    if (value <= to.max) {
      return value
    }

    throw new TypeError('must be a lower number')
  }
}
