import utils from '../../../utils/utils.js'

export default function logger ({
  format = async context => context,
  handler = console,
  method = 'log'
} = {}) {
  const log = utils.logger({ format, handler, method })

  return async (value, fields) => {
    await log({ fields, value })

    return value
  }
}
