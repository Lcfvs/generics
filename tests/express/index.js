import attempt from '../../lib/express/attempt.js'
import { body, params, query } from '../../lib/express/parser.js'
import hooks from '../../lib/express/hooks/index.js'
import parsers from '../../lib/validation/parsers/index.js'

const text = {
  maxlength: 100,
  minlength: 5,
  type: 'text'
}

const absoluteInteger = {
  max: 100,
  min: 0,
  step: 1,
  type: 'number'
}

const rules = {
  text: [
    parsers.string.type(),
    parsers.string.maxlength(text),
    parsers.string.minlength(text)
  ],
  absoluteInteger: [
    parsers.number.type(),
    parsers.number.max(absoluteInteger),
    parsers.number.min(absoluteInteger),
    parsers.number.step(absoluteInteger)
  ]
}

const route = attempt([
  body(rules),
  params(rules),
  query(rules),
  hooks.logger()
])

// emulates a route(request, response, next) call
void route(
  {
    body: {
      text: '12345',
      absoluteInteger: '10'
    },
    params: {
      text: '12345',
      absoluteInteger: '10'
    },
    query: {
      text: '12345',
      absoluteInteger: '10'
    }
  },
  {},
  error => console.error(error)
)
