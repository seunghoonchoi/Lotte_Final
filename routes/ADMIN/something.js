const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
    console.log(req);
    res.end('admmin page');
});

module.exports = router;
