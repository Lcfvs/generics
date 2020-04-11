import object from '../../../../types/object/object.js'
import max from './max.js'
import min from './min.js'
import step from './step.js'
import type from './type.js'

export default {
  all (target) {
    const properties = object.parse(target)

    return [
      this.type(properties),
      properties.max !== undefined && this.max(properties),
      properties.min !== undefined && this.min(properties),
      properties.step !== undefined && this.step(properties)
    ].filter(Boolean)
  },
  max,
  min,
  step,
  type
}
