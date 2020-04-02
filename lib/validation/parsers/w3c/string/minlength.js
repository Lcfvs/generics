import parse from '../../../../types/string/parse.js'
import string from '../../native/string/string.js'

export default function minlength ({
  minlength
}) {
  return string.minlength({
    minlength: parse(minlength)
  })
}
