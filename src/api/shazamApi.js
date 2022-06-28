const url = 'https://shazam.p.rapidapi.com/search';
const limit = 'limit=5';
const locale = 'locale=en-US';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '26252c9087msha78caebdec8cd49p109502jsneddce88e2810',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
  },
};

export default function searchMusic(queryName, page = 0) {
  const response = fetch(
    `${url}?term=${queryName}&${locale}&offset=${page}&${limit}`,
    options
  ).then(response => response.json());
  return response;
}
