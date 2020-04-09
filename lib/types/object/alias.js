import rewrite from './rewrite.js'

function rename ([from, value]) {
  const { [from]: to = from } = this

  return [to, value]
}

export default function alias ({ ...target }, { ...aliases }) {
  return rewrite(target, rename, aliases)
}
