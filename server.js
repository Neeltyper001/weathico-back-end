const express = require('express');
const app = express();
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  params: {q: '53.1,-0.13'},
  headers: {
    'X-RapidAPI-Key': 'e106778c09msh13e2fb9682a4d94p1d03efjsn149de6591718',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

const cors = require('cors');
app.use(cors());

app.get('/', async (req, res) => {
  try {
    const response = await axios.request(options);
    res.send(response.data);
  } catch (error) {
    console.error(error);
  }
})

app.listen(8000, () => console.log('Server running on port 8000'));