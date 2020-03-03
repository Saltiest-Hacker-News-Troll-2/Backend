exports.up = function(knex) {
  return knex.schema.createTable("USER", tbl => {
    tbl.increments().primary();
    tbl.string("first_name");
    tbl.string("last_name");
    tbl.string("email");
    tbl.string("username").notNullable();
    tbl.string("password").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExits("USER");
};
