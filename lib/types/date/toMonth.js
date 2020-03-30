import parse from './parse.js'

export default function toMonth (date) {
  const copy = parse(date)

  return [
    copy.getFullYear(),
    copy.getMonth()
  ]
}
