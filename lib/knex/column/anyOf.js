import misc from '../../validation/parsers/misc/misc.js'
import type from './type.js'

export default function anyOf (name, {
  value = undefined,
  values,
  ...rest
} = {}, parsers = () => [misc.anyOf(values)]) {
  return type(name, {
    value,
    values,
    ...rest,
    type: 'anyOf'
  }, parsers)
}
