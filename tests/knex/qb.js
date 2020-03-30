import configure from '../../lib/knex/qb.js'
import hooks from '../../lib/knex/hooks/hooks.js'

const config = {
  client: 'sqlite3',
  connection: {
    filename: './tests/knex/db.sqlite3'
  },
  migrations: {
    directory: './migrations'
  },
  seeds: {
    directory: './seeds'
  },
  useNullAsDefault: true
}

const qb = configure(config)

const context = {
  qb
}

qb.addHook('before', 'select', '*', hooks.statements(context))
qb.addHook('before', 'select', '*', hooks.archivedDate(context))
qb.addHook('after', 'select', '*', hooks.rows(context))
qb.addHook('before', 'insert', '*', hooks.id(context))
qb.addHook('before', 'insert', '*', hooks.createdDate(context))
qb.addHook('before', 'insert', '*', hooks.data(context))
qb.addHook('before', 'insert', '*', hooks.statements(context))
qb.addHook('before', 'update', '*', hooks.id(context))
qb.addHook('before', 'update', '*', hooks.updatedDate(context))
qb.addHook('before', 'update', '*', hooks.data(context))
qb.addHook('before', 'update', '*', hooks.statements(context))
qb.addHook('before', 'delete', '*', hooks.statements(context))

export default qb
