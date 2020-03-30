import string from '../../../../types/string/string.js'
import number from '../../native/number/number.js'

export default function min ({
  min
}) {
  return number.min({
    min: +string.parse(min)
  })
}
