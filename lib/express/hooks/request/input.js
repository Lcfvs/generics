import object from '../../../types/object/object.js'
import string from '../../../types/string/string.js'
import parse from '../../../validation/parse.js'
import validateField from '../../utils/validateField.js'

const codes = {
  body: 422,
  headers: 400,
  params: 404,
  query: 400
}

const input = {
  all: (parsers = {}) => Object.entries(parsers).map(scope),
  body: parsers => parser('body', parsers),
  headers: parsers => parser('headers', parsers),
  params: parsers => parser('params', parsers),
  query: parsers => parser('query', parsers)
}

function scope ([name, parsers]) {
  return input[name](parsers)
}

function parser (key, parsers = {}) {
  const name = string.parse(key)
  const steps = object.parse(parsers)

  Object.values(steps)
    .forEach(validateField)

  return async ({ context, next, request: { [name]: data } }) => {
    try {
      return {
        ...context,
        [name]: await parse(steps, data)
      }
    } catch (error) {
      next(Object.assign(error, {
        code: codes[name] || 500
      }))
    }
  }
}

export default input
