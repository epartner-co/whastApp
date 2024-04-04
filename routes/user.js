const { Router } = require('express');


const router = Router();

router.get('/', (req,resp)=>{
    resp.send("Soy un servicio")
});

module.exports = router; 