import w3c from '../../validation/parsers/w3c/w3c.js'
import type from './type.js'

export default function boolean (name, {
  value = undefined,
  ...rest
} = {}, parsers = column => w3c.boolean.all(column)) {
  return type(name, {
    value,
    ...rest,
    type: 'boolean'
  }, parsers)
}
