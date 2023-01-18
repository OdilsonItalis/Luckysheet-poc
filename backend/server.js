const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const router = require('./modules/routes');

process.on('uncaughtException', e =>
  console.error(new Date(), 'uncaughtException', e),
);

app.use(cors());

app.use(bodyParser.json());

app.use(router);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
