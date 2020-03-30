import fromMonth from '../../../../types/date/fromMonth.js'
import toMonth from '../../../../types/date/toMonth.js'

export default function max ({
  max
}) {
  const [years, months] = toMonth(fromMonth(max))

  const to = {
    months,
    years
  }

  return async ([years, months]) => {
    if (years <= to.years || (years === to.years && months <= to.months)) {
      return [years, months]
    }

    throw new TypeError('must be an anterior month')
  }
}
