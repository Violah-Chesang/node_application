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

//Have a GET endpoint /filter which accepts two route parameters, id and price in that order. Validate that 
//price must be a number. And id must be a string or a number but must be 2 or more characters. If criteria is 
//not met, respond with "Invalid data"

router.get('/filter/:id/:price',(req,res) => {
    //change price type
    let price = parseInt(req.params.price);
    let id = req.params.id;

    if(!(typeof price === 'number' && id.length === 2)) {
        res.send('Invalid data');
    }else{
        res.send('Everything seem fine!')
   
    }
 });

router.get('/login-form',(req,res) => {
    res.render('login');
});

router.post('/login-form',(req,res) => {

    res.send({names:allMembers});
});

module.exports = router