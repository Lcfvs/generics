import knex from 'knex'
import hooks from 'knex-hooks'

export default function configure (
  { ...config }
) {
  return hooks(knex(config))
}
