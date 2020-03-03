const db = require("./config");

module.exports = {
  addUser,
  findUserById,
  findUserByUsername,
  updateUser,
  getCommentsByUsername,
  getCommentById,
  getCommentsByParent
};

//* USER
function addUser(user) {
  return db("USER")
    .insert(user)
    .then(([id]) => findUserById(id));
}

function findUserById(id) {
  return db("USER")
    .where({ id })
    .first();
}

function findUserByUsername(username) {
  return db("USER")
    .where("username", username)
    .first();
}

function updateUser(id, user) {
  return db("USER")
    .update(user)
    .where({ id });
}

//* COMMENTS
function getCommentsByUsername(username) {
  return db("CommentTable").where("by", username);
}
function getCommentById(id) {
  return db("CommentTable").where({ id });
}
function getCommentsByParent(id) {
  return db("CommentTable").where("parent", id);
}
