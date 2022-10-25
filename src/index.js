import './style.css';
import { refreshBttn, addForm, scoresWrap } from './modules/elements.js';
import Functions from './modules/methods.js';

const scoresArr = new Functions();

window.addEventListener('DOMContentLoaded', () => {
  scoresArr.parseLocalSt();
  scoresArr.printHTMl();
});

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameInput = document.getElementById('nameInput');
  const scoreInput = document.getElementById('scoreInput');

  scoresArr.getValues(nameInput, scoreInput);
  scoresArr.setIndex();
  scoresArr.printHTMl();
  scoresArr.addToLocalStorage();
  Functions.clearInput(nameInput, scoreInput);
});

refreshBttn.addEventListener('click', () => {
  scoresWrap.innerHTML = '';
  localStorage.clear();
  scoresArr.deleteArr();
});