// Update with your config settings.

const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/hobbits";


module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/characters.db3'
    },
    useNullAsDefault: true,
    migrations:{
      directory: './migrations/migrations'
    }
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/test.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./migrations/migrations",
    },
    seeds: {
      directory: "./migrations/seeds",
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
directory: './migrations/migrations',
    },
  
  }

};
