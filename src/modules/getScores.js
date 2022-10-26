import printScores from './printScores.js';

const getScores = async () => {
  const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/rq41dNxtYwuAE9oJHQb9/scores/';
  const response = await fetch(apiURL);
  const json = await response.json();
  const arrScore = json.result;

  printScores(arrScore);
};

export default getScores;