const express = require('express');
const app = express();
const axios = require('axios');
const dotenv = require('dotenv').config();
const api_key = process.env.API_KEY;

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  params: {q: '53.1,-0.13'},
  headers: {
    'X-RapidAPI-Key': api_key,
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