const express = require('express');
const router = require('./routes/loginroute');

const app = express();

app.set('view engine', 'ejs')

app.use(router);

app.listen(6600, () => console.log('Sever has started!'));