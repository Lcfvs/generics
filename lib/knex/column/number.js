import w3c from '../../validation/parsers/w3c/w3c.js'
import type from './type.js'

export default function number (name, {
  max,
  min,
  step = '1',
  value = undefined,
  ...rest
} = {}, parsers = column => w3c.number.all(column)) {
  return type(name, {
    max,
    min,
    step,
    value,
    ...rest,
    type: 'number'
  }, parsers)
}
