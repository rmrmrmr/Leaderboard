import './style.css';
import { refreshBttn, addForm } from './modules/elements.js';
import postScores from './modules/postScores.js';
import getScores from './modules/getScores.js';

addForm.addEventListener('submit', postScores);

refreshBttn.addEventListener('click', getScores);