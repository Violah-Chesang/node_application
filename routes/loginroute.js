const express = require('express');

const router = express.Router();


router.get('/login-form',(req,res) => {
    res.send('Success');
});

module.exports = router