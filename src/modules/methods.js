import { ScoreObject, scoresWrap } from './elements.js';

export default class Functions {
  constructor() {
    this.scoresArr = [];
  }

  static clearInput(inputOne, inputTwo) {
    inputOne.value = '';
    inputTwo.value = '';
  }

  getValues(name, score) {
    const { scoresArr } = this;
    const nameValue = name.value;
    const scoreValue = score.value;
    const scoreObj = new ScoreObject(nameValue, scoreValue);
    scoresArr.push(scoreObj);
  }

  setIndex() {
    const { scoresArr } = this;
    let count = 1;
    scoresArr.forEach((element) => {
      element.index = count;
      count += 1;
    });
  }

  printHTMl() {
    scoresWrap.innerHTML = '';
    const { scoresArr } = this;
    scoresArr.forEach((element) => {
      const playerName = element.name;
      const playerScore = element.score;
      const id = element.index;

      const wrap = document.createElement('div');
      wrap.classList.add('scoreWrap');
      wrap.setAttribute('id', id);
      scoresWrap.append(wrap);

      const scoreText = document.createElement('p');
      scoreText.innerHTML = `${playerName} : ${playerScore}`;
      scoreText.classList.add('scoreText');
      wrap.append(scoreText);
    });
  }

  addToLocalStorage() {
    const { scoresArr } = this;
    const arrLocalSt = JSON.stringify(scoresArr);
    localStorage.setItem('scores', arrLocalSt);
  }

  parseLocalSt() {
    const { scoresArr } = this;
    const elems = JSON.parse(localStorage.getItem('scores'));
    if (elems !== null) {
      elems.forEach((element) => {
        scoresArr.push(element);
      });
    }
  }

  deleteArr() {
    while (this.scoresArr.length > 0) {
      this.scoresArr.pop();
    }
  }
}