import string from '../../../../types/string/string.js'

export default function type () {
  return async value => string.parse(value)
}
