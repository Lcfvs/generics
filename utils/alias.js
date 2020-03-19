function rename ([from, value]) {
  const { [from]: to = from} = this

  return [to, value]
}

export default function alias ({ ...target }, { ...aliases }) {
  return Object.fromEntries(Object.entries(target).map(rename, aliases))
}
