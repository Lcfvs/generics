import utils from '../../../utils/utils.js'

export default function logger ({
  format = context => context,
  handler = console,
  method = 'log'
} = {}) {
  const hook = utils.logger({ format, handler, method })

  return async ({ context }) => hook(context)
}
