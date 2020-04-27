import misc from '../../validation/parsers/misc/misc.js'
import type from './type.js'

export default function anyOf (name, {
  values,
  value = undefined,
  ...rest
} = {}, parsers = () => [misc.anyOf(values)]) {
  return type(name, {
    value,
    ...rest,
    type: 'anyOf'
  }, parsers)
}
