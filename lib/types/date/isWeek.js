import fromWeek from './fromWeek.js'
import toWeek from './toWeek.js'

export default function isWeek (value) {
  try {
    const [years, weeks] = toWeek(fromWeek(value))

    return value[0] === years
      && value[1] === weeks
  } catch (e) {}

  return false
}
