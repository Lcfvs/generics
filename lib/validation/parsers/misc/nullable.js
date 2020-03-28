import coalesce from './coalesce.js'

const fn = coalesce({
  coalesce: null
})

export default function nullable () {
  return fn
}
