import parse from '@lcf.vs/generics/validation/parse.js'

function parser (key, [...parsers]) {
  return async ({ context, next, request: { [key]: data } }) => {
    try {
      return {
        ...context,
        [key]: await parse(parsers, data)
      }
    } catch (error) {
      next(Object.assign(error, {
        code: key === 'body'
          ? 422
          : 400
      }))
    }
  }
}

export const {
  body = parsers => parser('body', parsers),
  params = parsers => parser('params', parsers),
  query = parsers => parser('query', parsers)
} = {}
