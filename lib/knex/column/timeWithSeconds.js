import w3c from '../../validation/parsers/w3c/w3c.js'
import time from './time.js'

export default function timeWithSeconds (name, {
  max = '23:59',
  min = '00:00',
  step = '1',
  value = undefined,
  ...rest
} = {}, parsers = column => w3c.time.all(column)) {
  return time(name, {
    max,
    min,
    step,
    value,
    ...rest
  }, parsers)
}
