export default function step ({
  min,
  step
}) {
  const multiple = step * 60000
  const timestamp = +min

  return async value => {
    if ((value - timestamp) % multiple === 0) {
      return value
    }

    throw new TypeError('must be a W3C time step multiple')
  }
}
