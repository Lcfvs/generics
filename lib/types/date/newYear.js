import midnight from './midnight.js'
import withDate from './withDate.js'

export default function newYear (year) {
  return midnight(withDate(new Date(), year, 0, 1))
}
