import fromMonth from '../../../../types/date/fromMonth.js'
import toMonth from '../../../../types/date/toMonth.js'

export default function min ({
  min
}) {
  const [years, months] = toMonth(fromMonth(min))

  const to = {
    months,
    years
  }

  return async ([years, months]) => {
    if (years >= to.years || (years === to.years && months >= to.months)) {
      return [years, months]
    }

    throw new TypeError('must be an posterior month')
  }
}
