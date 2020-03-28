import object from '../object/index.js'

const parse = object.type()

export default function type () {

  return async value => {
    try {
      return parse(value)
    } catch (e) {
      throw new Error('must be a file')
    }
  }
}
