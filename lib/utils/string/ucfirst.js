export default function ucfirst (data) {
  const [first, ...rest] = data

  return `${first.toUpperCase()}${rest.join('')}`
}
