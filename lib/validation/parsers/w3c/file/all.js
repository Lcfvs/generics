import object from '../../../../types/object/object.js'
import accept from './accept.js'
import maxSize from './maxSize.js'
import type from './type.js'

export default function all (target) {
  const properties = object.parse(target)

  return [
    type(properties),
    properties.accept !== undefined && accept(properties),
    properties.maxSize !== undefined && maxSize(properties)
  ].filter(Boolean)
}
