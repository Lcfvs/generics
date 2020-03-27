export default function accept ({
  accept
}) {
  const mimes = accept.split(',')

  return async value => {
    try {
      const { mimetype } = value
      const [scope] = mimetype.split('/')

      if (mimes.includes(mimetype) || mimes.includes(`${scope}/*`)) {
        return value
      }
    } catch (e) {}

    throw new TypeError('must be a accepted file type')
  }
}
