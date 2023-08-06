const request = require('request');

const fetchBreedDescription = (breed, callback) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    const data = JSON.parse(body);
    try {
      data[0].name;
    } catch (error) {
      callback(error);
      return;
    }
    callback(error, data[0].description);
  });
};

module.exports = { fetchBreedDescription };