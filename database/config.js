const { DB_ENV = "development" } = process.env;
const knex = require("knex");
const options = require("../knexfile");

module.exports = knex(options.development);
