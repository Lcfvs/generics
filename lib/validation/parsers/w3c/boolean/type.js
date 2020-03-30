import array from '../../../../types/array/array.js'
import string from '../../../../types/string/string.js'

export default function type ({
  true: truly = '1',
  false: falsy = ['', null]
}) {
  const values = [string.parse(truly), array.parse(falsy).flat()]

  return async value => {
    if (values.includes(value)) {
      return value === truly
    }

    throw new TypeError('must be a boolean string')
  }
}
