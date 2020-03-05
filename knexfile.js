// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/HRData6.sqlite3"
    },
    migrations: {
      directory: "./database/migrations"
    },
    useNullAsDefault: true
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./__test__/HRDataTesting.sqlite3"
    },
    migrations: {
      directory: "./database/migrations"
    },
    useNullAsDefault: true
  },

  production: {
    client: "sqlite3",
    connection: {
      filename: "./database/HRData6.sqlite3"
    },
    migrations: {
      directory: "./database/migrations"
    },
    useNullAsDefault: true
  }
};
