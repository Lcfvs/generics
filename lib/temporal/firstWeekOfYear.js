import clone from './clone.js'

export default function firstWeekOfYear (date) {
  return [clone(date).getFullYear(), 1]
}
