import parse from '../../../../types/boolean/parse.js'

export default function type () {
  return async value => parse(value)
}
