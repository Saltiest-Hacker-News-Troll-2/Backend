const db = require("./model");
const axios = require("axios");

const updateScores = async () => {
  let comments = await db.getComments(10000, 0);
  console.log(comments);
  let scores = [];
  for (let i = 0; i < comments.length; i++) {
    console.log({ i });
    await axios
      .get(`https://hn-ds-api.herokuapp.com/sentence/${comments[i].Text}`)
      .then(score => {
        scores.push({
          id: comments[i].id,
          Score: score.data.Analysis * -100
        });
      })
      .catch(err => err);
  }
  return scores;
};

updateScores().then(scores => {
  scores.forEach(comment => {
    db.updateComment(comment.id, comment)
      .then(count => console.log(count, comment.id))
      .catch(err => err);
  });
});
