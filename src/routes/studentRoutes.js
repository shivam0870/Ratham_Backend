const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const authMiddleware = require('../utils/auth'); 


router.post('/login', studentController.login);


router.get('/free-sessions', authMiddleware.verifyToken, studentController.getFreeSessions);


router.post('/book-session', authMiddleware.verifyToken, studentController.bookSession);

module.exports = router;
