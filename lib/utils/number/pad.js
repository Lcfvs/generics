export default function pad (value, max = 2, filling = '0') {
  const sign = value >= 0 ? '' : '-'
  const padded = Math.abs(value).toString(10).padStart(max, filling)

  return `${sign}${padded}`
}
