const express = require('express');
const isAuthenticated = require('../middlewares/isAuthenticated.js');

const { sendMessage, getMessage } = require('../controllers/message.controller.js');

const router = express.Router();

router.route('/send/:id').post(isAuthenticated, sendMessage);
router.route('/all/:id').get(isAuthenticated, getMessage);
 
module.exports = router;