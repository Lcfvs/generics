const migrations = [
  'knex_migrations',
  'knex_migrations_lock'
]

export default function isMigrationTable (table) {
  return migrations.includes(table)
}
