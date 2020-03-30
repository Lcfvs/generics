import toTimestamp from '../../../../types/date/toTimestamp.js'

export default function min ({
  min
}) {
  const to = {
    min: toTimestamp(min)
  }

  return async value => {
    if (value >= to.min) {
      return value
    }

    throw new TypeError('must be a posterior date')
  }
}
