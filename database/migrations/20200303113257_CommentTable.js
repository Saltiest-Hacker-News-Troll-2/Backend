exports.up = function(knex) {
  knex.schema.createTable("CommentTable", tbl => {
    tbl.increments();
    tbl.string("text");
  });
};

exports.down = function(knex) {
  knex.schema.createTableIfExists("CommentTable");
};
