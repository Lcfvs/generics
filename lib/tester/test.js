import log from './log.js'

export default async function test (tests, {
  depth = 3,
  stack = false,
  xhr = false
}) {
  const config = { depth, stack, xhr }
  let messages = 0
  let requests = 0

  function messenger (uri) {
    return message => {
      log({ [uri]: message }, depth)
      messages += 1
    }
  }

  return tests.reduce((promise, test) => {
    return promise.then(async (previous = {}) => {
      const { response, uri } = await test(config, previous, messenger)

      log({ [uri]: response }, depth)
      requests += 1

      return response
    })
  }, Promise.resolve())
    .then(() => ({ messages, requests }))
}
