export default function clean (result, [name, value]) {
  return {
    ...result,
    ...value === undefined
      ? {}
      : {
        [name]: value
      }
  }
}
