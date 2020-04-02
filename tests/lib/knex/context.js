import configure from '../../../lib/knex/qb.js'
import hooks from '../../../lib/knex/hooks/hooks.js'
import * as knexfile from '../../knexfile.js'
import env from '../../bootstrap.js'

const qb = configure(knexfile[env.NODE_ENV])

const context = Object.freeze({
  archivedDate: 'archivedDate',
  createdDate: 'createdDate',
  id: 'id',
  updatedDate: 'updatedDate',
  entities: {
    events: () => 'events'
  },
  qb
})

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

export default context
