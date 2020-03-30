import isMonth from '../../../../types/date/isMonth.js'

export default function type () {
  return async value => {
    if (isMonth(value)) {
      return value
    }

    throw new Error('must be a month')
  }
}
