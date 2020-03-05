exports.up = function(knex) {
  return knex.schema.createTable("Items", tbl => {
    tbl.increments("id").primary();
    tbl.string("By").notNullable();
    tbl.string("Text").notNullable();
    tbl.string("Score");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Items");
};
