import parse from '../../../../types/string/parse.js'
import string from '../../native/string/string.js'

export default function pattern ({
  pattern,
  type = ''
}) {

  return string.pattern({
    pattern: new RegExp(parse(pattern)),
    type
  })
}
