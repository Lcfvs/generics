import w3c from '../../validation/parsers/w3c/w3c.js'
import type from './type.js'

export default function file (name, {
  accept,
  maxSize,
  ...rest
} = {}, parsers = column => w3c.file.all(column)) {
  return type(name, {
    accept,
    maxSize,
    ...rest,
    type: 'file'
  }, parsers)
}
