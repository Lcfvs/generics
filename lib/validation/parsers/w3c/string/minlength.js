import string from '../../native/string/string.js'
import parse from '../../../../types/string/parse.js'

export default function minlength ({
  minlength
}) {
  return string.minlength({
    minlength: parse(minlength)
  })
}
