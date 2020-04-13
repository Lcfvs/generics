export default function resolve (action, ...params) {
  return [action, ...params].join('/')
}
