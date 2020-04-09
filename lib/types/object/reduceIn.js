export default function reduceIn (target, fn, context) {
  return Object.entries(target)
    .reduce((result, [key, name]) => fn(result, [key, name], context), {})
}
