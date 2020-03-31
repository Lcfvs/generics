export function up (qb) {
  return qb.schema
    .createTable('events', table => {
      table.increments('id').primary()
      table.dateTime('createdDate').nullable()
      table.dateTime('updatedDate').nullable()
      table.dateTime('archivedDate').nullable()
      table.string('content', 100).notNullable()
      table.dateTime('startDate').notNullable()
      table.dateTime('endDate').notNullable()
    })
}

export function down (qb) {
  return qb.schema
    .dropTable('events')
}
