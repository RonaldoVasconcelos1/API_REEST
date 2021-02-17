// Update with your config settings.
require('dotenv').config()
module.exports = {
  client: 'postgres',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DATABASE,
    user:     process.env.DB_USER,
    password: process.env.DB_PASS
  },
  pool: {
    min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
  }
};
