import object from '../../native/object/object.js'

const parse = object.type()

function error () {
  throw new Error('must be a file')
}

export default function type () {
  return value => parse(value)
    .catch(error)
}
