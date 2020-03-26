import withSeconds from '@lcf.vs/generics/lib/temporal/withSeconds.js'

export default function addSeconds (date, seconds) {
  return withSeconds(date, date.getSeconds() + seconds)
}
