import string from '../../native/string/string.js'

export default function pattern ({
  pattern,
  type = ''
}) {
  return string.pattern({
    pattern: new RegExp(pattern),
    type
  })
}
