import knex from 'knex'
import hooks from 'knex-hooks'
import all from './hooks/all.js'

const cols = {
  archivedDate: 'archivedDate',
  createdDate: 'createdDate',
  id: 'id',
  updatedDate: 'updatedDate'
}

export default function configure (config, columns = cols, hooker = all) {
  const context = {
    ...columns,
    qb: hooks(knex(config))
  }

  hooker(context)

  return Object.freeze(context)
}
