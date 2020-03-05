// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/HRD.db3"
    },
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    },
    useNullAsDefault: true
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./__test__/HRDataTesting.db3"
    },
    migrations: {
      directory: "./database/migrations"
    },
    useNullAsDefault: true
  },

  // todo CHANGE TO CORRECT SETTINGS
  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
