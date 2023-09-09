const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '22fb187c8dmshc113255b748227ap1d6ff0jsn01412e1107b1',
    'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
  },
};

fetch('https://genius-song-lyrics1.p.rapidapi.com/chart/songs/', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
