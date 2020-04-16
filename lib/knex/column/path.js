import w3c from '../../validation/parsers/w3c/w3c.js'
import type from './type.js'

export default function path (name, {
  maxlength,
  minlength,
  pattern,
  value = undefined,
  ...rest
} = {}, parsers = column => w3c.string.all(column)) {
  return type(name, {
    maxlength,
    minlength,
    pattern,
    value,
    ...rest,
    type: 'path'
  }, parsers)
}
