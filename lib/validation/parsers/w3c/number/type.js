import string from '../../../../types/string/string.js'
import number from '../../native/number/number.js'

const parse = number.type()

export default function type () {
  return async value => {
    try {
      return await parse(+string.parse(value))
    } catch (e) {
      return parse(NaN)
    }
  }
}
