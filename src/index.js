import playsound from 'play-sound';
import searchMusic from './api/shazamApi';
import template from './templates/musicCards.hbs';

const form = document.querySelector('.form');
const ul = document.querySelector('.container');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const queryInput = event.target.elements.query.value;
  searchMusic(queryInput).then(data =>
    ul.insertAdjacentHTML('beforeend', template(data.tracks))
  );
}
