const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const router = require('./modules/routes');
const db = require('./connect');

process.on('uncaughtException', e =>
  console.error(new Date(), 'uncaughtException', e),
);

app.use(cors());

app.use(bodyParser.json());

app.use(router);

db.connectDB();

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
