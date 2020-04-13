export default function xhr () {
  return async ({
    context,
    request: {
      headers: {
        'x-requested-with': value = ''
      }
    }
  }) => {
    return {
      ...context,
      xhr: value.split(',').includes('XMLHttpRequest')
    }
  }
}
