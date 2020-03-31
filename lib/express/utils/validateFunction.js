export default function validateFunction (fn) {
  if (typeof fn !== 'function') {
    throw new Error('must be a function')
  }
}
