const { Router } = require('express');


const router = Router();

router.get('/', (req,resp)=>{
    resp.send("Soy un whastApp que nose ha enviado ")
});

module.exports = router; 