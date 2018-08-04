var fetch  = require('node-fetch');

const url = 'http://localhost:3000/login';
fetch(url, {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  method: 'post',
  body: JSON.stringify({
    username: 'danker',
    password: '12345678'
  })
});