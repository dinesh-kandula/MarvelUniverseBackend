const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello, Dinnu Bunny!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} Hello Dinnu Bunny`);
});