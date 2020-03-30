import array from '../../../types/array/array.js'
import object from '../../../types/object/object.js'
import string from '../../../types/string/string.js'
import parse from '../../../validation/parse.js'

function validateField (field) {
  array.parse(field)
    .forEach(validateFunction)
}

function validateFunction (fn) {
  if (typeof fn !== 'function') {
    throw new Error('must be a function')
  }
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
        code: name === 'body'
          ? 422
          : 400
      }))
    }
  }
}

export const {
  body = parsers => parser('body', parsers),
  headers = parsers => parser('headers', parsers),
  params = parsers => parser('params', parsers),
  query = parsers => parser('query', parsers)
} = {}
