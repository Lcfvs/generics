export default function oneOf ([
  ...values
]) {
  return async value => {
    if (values.includes(value)) {
      return value
    }

    throw new TypeError(`must include one of proposed values`)
  }
}
