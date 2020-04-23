import object from '../../../types/object/object.js'

export default function alias (dao, table, hook, aliases = {}) {
  const process = hook(dao, table)

  return async (
    {
      context,
      ...rest
    }, {
      constraints = [],
      selector = '*'
    } = {}) => {
    const { params, query = {} } = context

    const response = await process({
      context: {
        ...context,
        params: {},
        query: object.alias({
          ...query,
          ...params
        }, aliases)
      },
      ...rest
    }, {
      constraints,
      selector
    })

    return {
      ...response,
      ...context
    }
  }
}
