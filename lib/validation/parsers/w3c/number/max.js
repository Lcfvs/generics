import string from '../../../../types/string/string.js'
import number from '../../native/number/number.js'

export default function max ({
  max
}) {
  return number.max({
    max: +string.parse(max)
  })
}
