import array from '../../../types/array/array.js'

function included (value) {
  return this.includes(value)
}

export default function allOf (values) {
  const data = array.parse(values)

  return async value => {
    if (data.every(included, value)) {
      return value
    }

    throw new TypeError(`must include all of proposed values`)
  }
}
