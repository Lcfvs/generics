import parse from '../../../../types/array/parse.js'

export default function type () {
  return async value => parse(value)
}
