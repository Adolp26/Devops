const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Teste funcionando, finalmente meu consagrado!!!');
});

const port = 3001;

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}/`);
});
