import fromWeek from '../../../../types/date/fromWeek.js'
import toWeek from '../../../../types/date/toWeek.js'

export default function max ({
  max
}) {
  const [years, weeks] = toWeek(fromWeek(max))

  const to = {
    weeks,
    years
  }

  return async ([years, weeks]) => {
    if (years <= to.years || (years === to.years && weeks <= to.weeks)) {
      return [years, weeks]
    }

    throw new TypeError('must be an anterior week')
  }
}
