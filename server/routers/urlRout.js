const express = require('express');

const {handleRedirectUrl,handleShortUrl} = require('../controller/url')

const router = express.Router();


router.post('/',handleRedirectUrl);
router.get('/:id',handleShortUrl);

module.exports = router;
