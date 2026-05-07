const express = require('express');
const router = express.Router();
const { createJournal, getJournal, getJournalById } = require('../controllers/journalController');

router.post('/addJournal',createJournal);

router.get('/getJournals',getJournal);

router.get('/getJournalById/:id',getJournalById);

module.exports = router;