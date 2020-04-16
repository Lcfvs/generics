import w3c from '../../validation/parsers/w3c/w3c.js'
import type from './type.js'

export default function datetime (name, {
  max = '9999-12-31T23:59',
  min = '1000-01-01T00:00',
  step = '60',
  value = undefined,
  ...rest
} = {}, parsers = column => w3c.datetime.all(column)) {
  return type(name, {
    max,
    min,
    step,
    type: 'datetime',
    value,
    ...rest
  }, parsers)
}
