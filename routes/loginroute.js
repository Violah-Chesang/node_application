const express = require('express');

const router = express.Router();

const family = ['Paul', 'Violah', 'Chelly', 'Israel', 'Ethan'];
const allMembers = family.forEach(familyMember => {
    return(familyMember);        
});

router.get('/search',(req,res) => {
   let q = req.query.q;
   console.log(req.query.q);
   if(q) {
        res.send(q);        
   }else{
        res.send('Invalid query!');
   }
});

router.get('/login-form',(req,res) => {
    res.render('login');
});

router.post('/login-form',(req,res) => {

    res.send({names:allMembers});
});

module.exports = router