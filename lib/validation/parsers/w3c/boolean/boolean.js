import object from '@lcf.vs/generics/lib/types/object/object.js'
import type from './type.js'

export default {
  all (target) {
    const properties = object.parse(target)

    return [
      this.type(properties)
    ]
  },
  type
}
