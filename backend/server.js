const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Funcionando meu parceiro, finalmente!!!');
});

const port = 3001;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
