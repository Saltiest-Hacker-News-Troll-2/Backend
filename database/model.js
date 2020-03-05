const db = require("./config");

module.exports = {
  userTruncate,
  userList,
  addUser,
  findUserById,
  findUserByUsername,
  updateUser,
  removeUser,
  getComments,
  getCommentsByUsername,
  getCommentById,
  getCommentsByParent,
  createComment,
  updateComment,
  removeComment
};

//* USER
function userTruncate() {
  return db("USER").truncate();
}
function userList() {
  return db("USER");
}

function addUser(user) {
  return db("USER")
    .insert(user)
    .then(([id]) => findUserById(id));
}

function findUserById(id) {
  return db("USER").where({ id });
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

function removeUser(id) {
  return db("USER")
    .where({ id })
    .delete();
}

//* COMMENTS
function getComments(limit, offset) {
  return db("Items")
    .limit(limit)
    .offset(offset);
}
function getCommentsByUsername(username, limit, offset) {
  return db("Items")
    .limit(limit)
    .offset(offset)
    .where("By", username);
}
function getCommentById(id) {
  return db("Items")
    .where({ id })
    .first();
}
function getCommentsByParent(id) {
  return db("Items").where("parent", id);
}
function createComment(comment) {
  return db("Items")
    .insert(comment)
    .then(([id]) => getCommentById(id));
}
function updateComment(id, comment) {
  return db("Items")
    .update(comment)
    .where({ id });
}

function removeComment(id) {
  return db("Items")
    .where({ id })
    .delete();
}

// function scoreGenerator(id) {
//   return getCommentById(id).then(([comment]) => {
//     getScore(comment.Text)
//       .then(res => console.log("score", res))
//       .catch(err => console.log("error", err));
//   });
// }
