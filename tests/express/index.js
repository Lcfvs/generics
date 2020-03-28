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
  max: '2200-01-01T00:00',
  min: '1990-01-01T00:00',
  step: '1',
  type: 'datetime'
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
  ],
  date: [
    parsers.datetime.type(),
    parsers.datetime.max(date),
    parsers.datetime.min(date),
    parsers.datetime.step(date)
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
      text: '12345',
      absoluteInteger: '10',
      date: '1990-02-01T00:00'
    },
    params: {
      text: '12345',
      absoluteInteger: '10',
      date: '1990-02-01T00:00'
    },
    query: {
      text: '12345',
      absoluteInteger: '10',
      date: '1990-02-01T00:00'
    }
  },
  {},
  error => console.error(error)
)
