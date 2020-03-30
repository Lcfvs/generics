import attempt from '../../lib/express/attempt.js'
import hooks from '../../lib/express/hooks/hooks.js'
import parsers from '../../lib/validation/parsers/parsers.js'

const text = {
  maxlength: '100',
  minlength: '5',
  type: 'text'
}

const absoluteInteger = {
  max: '100',
  min: '0',
  step: '1',
  type: 'number'
}

const date = {
  max: '2200-01-01T00:00:00',
  min: '1900-01-01T00:00:00',
  step: '1',
  type: 'datetime'
}

const rules = {
  text: [
    parsers.w3c.string.type(),
    parsers.w3c.string.maxlength(text),
    parsers.w3c.string.minlength(text)
  ],
  absoluteInteger: [
    parsers.w3c.number.type(),
    parsers.w3c.number.max(absoluteInteger),
    parsers.w3c.number.min(absoluteInteger),
    parsers.w3c.number.step(absoluteInteger)
  ],
  date: [
    parsers.w3c.datetime.type(date),
    parsers.w3c.datetime.max(date),
    parsers.w3c.datetime.min(date),
    parsers.w3c.datetime.step(date)
  ]
}

const route = attempt([
  hooks.request.body(rules),
  hooks.request.params(rules),
  hooks.request.query(rules),
  hooks.log.logger()
])

// emulates a route(request, response, next) call
void route(
  {
    body: {
      text: 'abcde',
      absoluteInteger: '10',
      date: '1900-02-01T00:00:00'
    },
    params: {
      text: 'abcde',
      absoluteInteger: '10',
      date: '1990-02-01T00:00:00'
    },
    query: {
      text: 'abcde',
      absoluteInteger: '10',
      date: '1990-02-01T00:00:00'
    }
  },
  {},
  error => console.error(error)
)
