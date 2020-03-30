import string from '../../../../types/string/string.js'
import number from '../../native/number/number.js'

export default function step ({
  min,
  step = '1'
}) {
  return number.step({
    min: +string.parse(min),
    step: +string.parse(step)
  })
}
