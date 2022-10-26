import getScores from './getScores.js';

const postScores = async (e) => {
  e.preventDefault();

  const user = document.getElementById('nameInput').value;
  const score = document.getElementById('scoreInput').value;

  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/rq41dNxtYwuAE9oJHQb9/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
  });

  e.target.reset();

  getScores();
};

export default postScores;