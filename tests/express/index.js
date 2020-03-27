import attempt from '../../lib/express/attempt.js'
import { body, params, query } from '../../lib/express/parser.js'
import logger from '../../lib/log/logger.js'
import parsers from '../../lib/validation/parsers/index.js'

const text = {
  maxlength: 100,
  minlength: 5,
  type: parsers.string
}

const absoluteInteger = {
  max: 100,
  min: 0,
  step: 1,
  type: parsers.number
}

const rules = {
  text: [
    text.type.type(),
    text.type.maxlength(text),
    text.type.minlength(text)
  ],
  absoluteInteger: [
    absoluteInteger.type.type(),
    absoluteInteger.type.max(absoluteInteger),
    absoluteInteger.type.min(absoluteInteger),
    absoluteInteger.type.step(absoluteInteger)
  ]
}

const route = attempt([
  body(rules),
  params(rules),
  query(rules),
  logger()
])

// emulates a route(request, response, next) call
void route(
  {
    body: {
      text: '12345',
      absoluteInteger: 10
    },
    params: {
      text: '12345',
      absoluteInteger: 10
    },
    query: {
      text: '12345',
      absoluteInteger: 10
    }
  },
  {},
  error => console.error(error)
)
