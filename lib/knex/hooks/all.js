import hooks from './hooks.js'

export default function all (context) {
  const { qb } = context

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

  return context
}
