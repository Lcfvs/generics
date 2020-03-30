import toTimestamp from '../../../../types/date/toTimestamp.js'

export default function max ({
  max
}) {
  const to = {
    max: toTimestamp(max)
  }

  return async value => {
    if (value <= to.max) {
      return value
    }

    throw new TypeError('must be an anterior date')
  }
}
