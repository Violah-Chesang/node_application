const express = require('express');
const router = require('./routes/loginroute');

const app = express();

app.use(router);

app.listen(5000);