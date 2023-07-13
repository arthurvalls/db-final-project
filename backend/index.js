const express = require('express');
const cors = require('cors');
const app = express();
require('./src/configs/dotenv')();
const port = process.env.PORT;
const pokemonRoutes = require('./src/routes/route.route');

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/router', pokemonRoutes);


/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  
  return;
});

app.listen(port, 'localhost', () => {
  console.log(`Example app listening at http://localhost:${port}`)
});