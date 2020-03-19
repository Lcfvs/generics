import parse from '@lcf.vs/generics/validation/parse.js'

function parser (key, rules) {
  return async ({ context, next, request: { [key]: data } }) => {
    try {
      return {
        ...context,
        [key]: await parse(rules, data)
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
  body = rules => parser('body', rules),
  params = rules => parser('params', rules),
  query = rules => parser('query', rules)
} = {}
