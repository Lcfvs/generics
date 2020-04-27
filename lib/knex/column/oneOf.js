import misc from '../../validation/parsers/misc/misc.js'
import type from './type.js'

export default function oneOf (name, {
  value = undefined,
  values,
  ...rest
} = {}, parsers = () => [misc.oneOf(values)]) {
  return type(name, {
    value,
    values,
    ...rest,
    type: 'oneOf'
  }, parsers)
}
