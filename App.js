const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello, Dinnu Bunny!');
});

app.get('/login', (req, res) => {
  res.send('Hello, It is Login Page');
});

app.get('/crew', (req, res) => {
  res.send('Hello, It is Crew Data Page');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} Hello Dinnu Bunny`);
});