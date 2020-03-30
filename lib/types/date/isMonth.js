import fromMonth from './fromMonth.js'
import toMonth from './toMonth.js'

export default function isMonth (value) {
  try {
    const [years, months] = toMonth(fromMonth(value))

    return value[0] === years
      && value[1] === months
  } catch (e) {}

  return false
}
