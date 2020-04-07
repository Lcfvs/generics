import utils from '../../../utils/utils.js'

export default function logger ({
  format = async context => context,
  handler = console,
  method = 'log'
} = {}) {
  const hook = utils.logger({ format, handler, method })

  return async value => {
    const { context } = value

    await hook(value)

    return context
  }
}
