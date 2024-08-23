module.exports = {
  client: 'mysql2',
  connection: {
    database: 'knex_database',
    user: 'usuario',
    password: 'senha'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
