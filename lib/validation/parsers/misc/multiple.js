import parse from '../../parse.js'
import array from '../array/index.js'

function init ({ length }) {
  return new Array(length)
    .fill(undefined)
}

function reject (error) {
  return Promise.reject(error)
}

export default function multiple ([
  ...parsers
]) {
  const type = array.type()

  return async (values, fields, name) => {
    let results = await type(values)
    const errors = init(values)
    const parsed = init(values)

    await results.map(async (value, key) => {
      try {
        const { result } = await parse({ result: parsers }, { result: value }, {
          ...fields,
          [name]: [...parsed]
        })

        parsed[key] = result
      } catch (error) {
        errors[key] = error
      }
    })

    return Promise.all(errors.filter(Boolean).length
      ? errors.map(reject)
      : parsed)
  }
}
