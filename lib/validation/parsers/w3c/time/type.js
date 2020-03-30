import fromW3CTime from '../../../../types/date/fromW3CTime.js'
import string from '../../../../types/string/string.js'
import date from '../../native/date/date.js'

const parse = date.type()

export default function type ({
  step = '60'
} = {}) {
  const withSeconds = +string.parse(step) < 60

  return async value => {
    try {
      return await parse(fromW3CTime(value, withSeconds))
    } catch (e) {
      throw new Error('must be a time')
    }
  }
}
