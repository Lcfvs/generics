import w3c from '../../validation/parsers/w3c/w3c.js'
import type from './type.js'

export default function month (name, {
  max = '9999-12',
  min = '1000-01',
  step = '1',
  value = undefined,
  ...rest
} = {}, parsers = column => w3c.string.all(column)) {
  return type(name, {
    max,
    min,
    step,
    value,
    ...rest
  }, parsers)
}
