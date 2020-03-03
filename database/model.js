const db = require("./config");

module.exports = {
  userList,
  addUser,
  findUserById,
  findUserByUsername,
  updateUser,
  getCommentsByUsername,
  getCommentById,
  getCommentsByParent,
  createComment,
  removeComment
};

//* USER
function userList() {
  return db("USER");
}

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
function createComment(comment) {
  return db("CommentTable")
    .insert(comment)
    .then(([id]) => getCommentById(id));
}
function removeComment(id) {
  return db("CommentTable")
    .where({ id })
    .delete();
}
