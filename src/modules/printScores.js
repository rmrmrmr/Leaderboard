import { scoresWrap } from './elements.js';

const printScores = (scoresArr) => {
  scoresWrap.innerHTML = '';

  scoresArr.forEach((userScore) => {
    const { user, score } = userScore;

    const wrap = document.createElement('div');
    wrap.classList.add('scoreWrap');
    scoresWrap.append(wrap);

    const scoreText = document.createElement('p');
    scoreText.innerHTML = `${user} : ${score}`;
    scoreText.classList.add('scoreText');
    wrap.append(scoreText);
  });
};

export default printScores;