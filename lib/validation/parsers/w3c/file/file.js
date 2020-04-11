import object from '../../../../types/object/object.js'
import accept from './accept.js'
import maxSize from './maxSize.js'

export default {
  accept,
  all (target) {
    const properties = object.parse(target)

    return [
      this.type(properties),
      properties.accept !== undefined && this.accept(properties),
      properties.maxSize !== undefined && this.maxSize(properties)
    ].filter(Boolean)
  },
  maxSize
}
