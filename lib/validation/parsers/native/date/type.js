import parse from '../../../../types/date/parse.js'

export default function type () {
  return async value => parse(value)
}
