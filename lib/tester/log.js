import { inspect } from 'util'

export default function log (value, depth = 3) {
  console.log(inspect(value, false, depth, true))
}
