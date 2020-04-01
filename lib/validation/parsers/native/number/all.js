import object from '../../../../types/object/object.js'
import max from './max.js'
import min from './min.js'
import step from './step.js'
import type from './type.js'

export default function all (target) {
  const properties = object.parse(target)

  return [
    type(properties),
    properties.max !== undefined && max(properties),
    properties.min !== undefined && min(properties),
    properties.step !== undefined && step(properties)
  ].filter(Boolean)
}
