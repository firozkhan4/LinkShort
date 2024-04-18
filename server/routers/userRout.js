const express = require('express');

const router = express.Router();

router.post('/signup', handleUserSignup);

router.get('/login',handleUserLogin);


module.exports = router;