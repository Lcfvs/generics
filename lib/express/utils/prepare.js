function toSQL ([name, value]) {
  return value === undefined || !this[name]
    ? value
    : this[name].prepare(value)
}

function map (columns, body) {
  return Object.entries(body)
    .map(toSQL, columns)
    .filter(Boolean)
}

export default function prepare (columns, body) {
  return Object.fromEntries(map(columns, body))
}
