import parse from '../../../../types/number/parse.js'

export default function min ({
  min
}) {
  const to = {
    min: parse(min)
  }

  return async value => {
    if (value >= to.min) {
      return value
    }

    throw new TypeError('must be a greater number')
  }
}
