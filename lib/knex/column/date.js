import w3c from '../../validation/parsers/w3c/w3c.js'
import type from './type.js'

export default function date (name, {
  max = '9999-12-31',
  min = '1000-01-01',
  step = '1',
  value = undefined,
  ...rest
} = {}, parsers = column => w3c.date.all(column)) {
  return type(name, {
    min,
    max,
    step,
    value,
    ...rest,
    type: 'date'
  }, parsers)
}
