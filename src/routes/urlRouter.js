const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController')

router.post('/api/shortUrls', urlController.short);
router.get('/api/search/:shortUrl', urlController.findByShortUrl);

module.exports = router;