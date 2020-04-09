export default function rewrite (target, map, context = null) {
  return Object.fromEntries(Object.entries(target).map(map, context))
}
