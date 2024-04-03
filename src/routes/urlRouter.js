const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController')

router.post('/api/shortUrl', urlController.short);
router.get('/api/search/:shortUrl', urlController.findByShortUrl);
router.get('/api/historial', urlController.historial);

module.exports = router;