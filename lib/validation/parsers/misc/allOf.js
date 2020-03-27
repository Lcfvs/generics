function included (value) {
  return this.includes(value)
}

export default function allOf ([
  ...values
]) {
  return async value => {
    if (values.every(included, value)) {
      return value
    }

    throw new TypeError(`must include all of proposed values`)
  }
}
