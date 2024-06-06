const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const notesRouter = require('./routes/notes');

const app = express();
app.use(bodyParser.json());
app.use('/notes', notesRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});

module.exports = app;
