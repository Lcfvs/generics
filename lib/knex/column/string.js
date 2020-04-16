import w3c from '../../validation/parsers/w3c/w3c.js'
import type from './type.js'

export default function string (name, {
  maxlength,
  minlength,
  value = undefined,
  ...rest
} = {}, parsers = column => w3c.string.all(column)) {
  return type(name, {
    maxlength,
    minlength,
    value,
    ...rest,
    type: 'string'
  }, parsers)
}
