import isDate from './isDate.js'

export default function firstDayOfJanuary (year) {
  const date = new Date(year, 0, 1)

  if (!isDate(date) || date.getFullYear() !== year) {
    throw new Error('must be a year')
  }

  return date
}
