const base = 'http://localhost:80'

export default function path (path) {
  try {
    const { pathname } = new URL(path, base)

    if ([pathname, `.${pathname}`].includes(path)) {
      return path
    }
  } catch (e) {}

  throw new TypeError('must be a path')
}
