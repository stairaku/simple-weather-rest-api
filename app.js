const axios = require('axios');
const params = {
  access_key: '3c063f49c4e9db55f7c59ab2229681f6',
  query: 'Vancouver'
}

axios.get('http://api.weatherstack.com/current', {params})
  .then(response => {
    const apiResponse = response.data;
    //console.log(apiResponse);
    console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
  }).catch(error => {
    console.log(error);
  });