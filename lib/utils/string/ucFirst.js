export default function ucFirst (data) {
  const [first, ...rest] = data

  return `${first.toUpperCase()}${rest.join('')}`
}
