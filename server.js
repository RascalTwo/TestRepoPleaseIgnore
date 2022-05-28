console.log('May Node be with you')
const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.post('/quotes', (req, res) => {
  console.log('Hellooooooooooooooooo!')
})


app.listen(3001, () => {
  console.log('listening on http://localhost:3001/');
});