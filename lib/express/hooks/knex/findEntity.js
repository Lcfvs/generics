import type from '../../../validation/parsers/knex/type.js'

export default function findEntity (knex, table) {
  const find = type(knex, table)
  const id = table.columns.id.column.name

  return async ({ context, next }) => {
    const { params: { [id]: value } } = context

    try {
      return {
        ...context,
        entity: {
          ...await find(value)
        }
      }
    } catch (e) {
      return next()
    }
  }
}
