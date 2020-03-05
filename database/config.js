//todo change file name to connection when changing to PG

const knex = require("knex");
const options = require("../knexfile");
const env = process.env.DB_ENV || "development";

module.exports = knex(options[env]);
