import attempt from '../../lib/express/attempt.js'
import hooks from '../lib/hooks/hooks.js'

export default {
  ...Object.entries(hooks.entities)
    .reduce((entities, [name, entity]) => ({
      ...entities,
      [name]: Object.entries(entity)
        .reduce((routes, [method, hooks]) => ({
          ...routes,
          [method]: attempt(hooks)
        }), {})
    }), {})
}
