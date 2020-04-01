import array from '../../../types/array/array.js'

export default function anyOf (values) {
  const data = array.parse(values)

  return async value => {
    if (data.includes(value)) {
      return value
    }

    throw new TypeError(`must include any of proposed values`)
  }
}
