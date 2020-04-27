import misc from '../../validation/parsers/misc/misc.js'
import type from './type.js'

export default function oneOf (name, {
  values,
  value = undefined,
  ...rest
} = {}, parsers = () => misc.oneOf(values)) {
  return type(name, {
    value,
    ...rest,
    type: 'oneOf'
  }, parsers)
}
