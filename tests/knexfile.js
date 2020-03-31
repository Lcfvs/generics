import './bootstrap.js'

export const {
  development = {
    client: 'sqlite3',
    connection: {
      filename: './db.sqlite3'
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    },
    useNullAsDefault: true
  }
} = {}
