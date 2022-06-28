import searchMusic from './api/shazamApi';
import template from './templates/musicCards.hbs';

const form = document.querySelector('.form');
const ul = document.querySelector('.container');
const target = document.querySelector('.target-guard');
let queryInput = '';
let page = 0;

const options = {
  root: null,
  rootMargin: '400px',
  threshold: 1.0,
};

const observer = new IntersectionObserver(updateCards, options);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  ul.innerHTML = '';
  page = 0;
  observer.unobserve(target);
  queryInput = event.target.elements.query.value;
  searchMusic(queryInput).then(data => {
    ul.insertAdjacentHTML('beforeend', template(data.tracks));
    observer.observe(target);
  });
}

function updateCards(entries) {
  // console.log(entries);
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      page += 1;
      searchMusic(queryInput, page).then(data => {
        ul.insertAdjacentHTML('beforeend', template(data.tracks));
      });
    }
  });
}
