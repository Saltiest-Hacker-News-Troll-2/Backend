exports.up = function(knex) {
  return knex.schema.createTable("CommentTable", tbl => {
    tbl.increments().primary();
    tbl.string("by");
    tbl.string("text").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("CommentTable");
};
