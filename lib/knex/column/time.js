import w3c from '../../validation/parsers/w3c/w3c.js'
import type from './type.js'

export default function time (name, {
  max = '23:59',
  min = '00:00',
  step = '60',
  value = undefined,
  ...rest
} = {}, parsers = column => w3c.time.all(column)) {
  return type(name, {
    min,
    max,
    step,
    value,
    ...rest,
    type: 'time'
  }, parsers)
}
