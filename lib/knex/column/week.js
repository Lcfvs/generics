import w3c from '../../validation/parsers/w3c/w3c.js'
import type from './type.js'

export default function week (name, {
  max = '9999-W52',
  min = '1000-W01',
  step = '1',
  value = undefined,
  ...rest
} = {}, parsers = column => w3c.week.all(column)) {
  return type(name, {
    max,
    min,
    step,
    value,
    ...rest
  }, parsers)
}
