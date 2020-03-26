import withSeconds from './withSeconds.js'

export default function addSeconds (date, seconds) {
  return withSeconds(date, date.getSeconds() + seconds)
}
