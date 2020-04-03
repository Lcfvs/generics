export default function url (url) {
  try {
    const parsed = new URL(url)

    if (parsed.toString() === url) {
      return parsed
    }
  } catch (e) {}

  throw new TypeError('must be an URL')
}
