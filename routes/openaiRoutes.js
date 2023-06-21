const express = require('express');
const { generateImage } = require('../controllers/openaiController');
const router = express.Router();

// creating the routes
router.post('/generateimage', generateImage);

module.exports = router;