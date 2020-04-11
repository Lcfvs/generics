import knex from 'knex'
import knexHooks from 'knex-hooks'
import all from './hooks/all.js'

export default function configure (config, entities, hooks = all) {
  return Object.freeze(hooks({
    entities,
    qb: knexHooks(knex(config))
  }))
}
