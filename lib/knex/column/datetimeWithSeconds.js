import w3c from '../../validation/parsers/w3c/w3c.js'
import datetime from './datetime.js'

export default function datetimeWithSeconds (name, {
  max = '9999-12-31T23:59',
  min = '1000-01-01T00:00',
  step = '1',
  value = undefined,
  ...rest
} = {}, parsers = column => w3c.datetime.all(column)) {
  return datetime(name, {
    max,
    min,
    step,
    value,
    ...rest
  }, parsers)
}
