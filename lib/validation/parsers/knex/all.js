import object from '../../../types/object/object.js'
import type from './type.js'

export default function all (target) {
  const properties = object.parse(target)

  return [
    type(properties)
  ]
}
