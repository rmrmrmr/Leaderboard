import './style.css';
import { refreshBttn, addForm } from './modules/elements.js';
import postScores from './modules/postScores';
import getScores from './modules/getScores';

addForm.addEventListener('submit', postScores);

refreshBttn.addEventListener('click', getScores);