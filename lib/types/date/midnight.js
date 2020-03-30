import withTime from './withTime.js'

export default function midnight (date) {
  return withTime(date, 0, 0, 0, 0)
}
