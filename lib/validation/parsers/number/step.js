export default function step ({
  min,
  step
}) {
  const multiple = +step
  const limit = +min

  return async value => {
    if ((value - limit) % multiple === 0) {
      return value
    }

    throw new TypeError('must be a W3C number step multiple')
  }
}
