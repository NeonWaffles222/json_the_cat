const request = require('request');

const getBreed = (breed) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      console.log('Error:', error);
      return;
    }

    const data = JSON.parse(body);

    try {
      data[0].name;
    } catch (error) {
      console.log(`Breed ${breed} not found`);
      return;
    }

    console.log(data[0].description);
  });
};

getBreed(process.argv[2]);