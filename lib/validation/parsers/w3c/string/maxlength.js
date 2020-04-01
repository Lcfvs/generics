import parse from '../../../../types/string/parse.js'
import string from '../../native/string/string.js'

export default function maxlength ({
  maxlength
}) {
  return string.maxlength({
    maxlength: parse(maxlength)
  })
}
