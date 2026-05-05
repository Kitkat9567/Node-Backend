const express = require('express');
const router = express.Router();
const { createJournal, getJournal } = require('../controllers/journalController');

router.post('/addJournal',createJournal);

router.get('/getJournals',getJournal);

module.exports = router;