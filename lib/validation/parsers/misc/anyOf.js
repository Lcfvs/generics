export default function anyOf ([
  ...values
]) {
  return async value => {
    if (values.includes(value)) {
      return value
    }

    throw new TypeError(`must include any of proposed values`)
  }
}
