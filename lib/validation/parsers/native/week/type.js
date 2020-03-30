import isWeek from '../../../../types/date/isWeek.js'

export default function type () {
  return async value => {
    if (isWeek(value)) {
      return value
    }

    throw new Error('must be a week')
  }
}
