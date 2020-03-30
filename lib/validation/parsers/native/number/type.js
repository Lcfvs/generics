import parse from '../../../../types/number/parse.js'

export default function type () {
  return async value => parse(value)
}
