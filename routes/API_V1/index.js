const express = require('express');
const router = express();

const user = require('./user.js');
const test = require('./test.js');

router.use('/user', user);
router.use('/test', test);

module.exports = router;