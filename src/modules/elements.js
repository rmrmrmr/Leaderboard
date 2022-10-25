export const refreshBttn = document.getElementById('refreshBttn');
export const addForm = document.getElementById('addForm');
export const scoresWrap = document.getElementById('scoresBox');
export class ScoreObject {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}