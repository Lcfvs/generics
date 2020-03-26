export function up (qb) {
  return qb.schema
    .createTable('events', table => {
      table.increments('id').primary()
      table.string('content', 100).notNullable()
      table.dateTime('start').notNullable()
      table.dateTime('archivedAt').nullable()
      table.dateTime('end').notNullable()
    })
}

export function down (qb) {
  return qb.schema
    .dropTable('events')
}
