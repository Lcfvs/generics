export default function hostname () {
  return async value => {
    try {
      const parsed = new URL(`http://${value}:80`)

      if (parsed.hostname === value) {
        return parsed
      }
    } catch (e) {}

    throw new TypeError('must be a hostname')
  }
}
