const express = require("express");
const router = express.Router();
const {
  createJournal,
  getJournal,
  getJournalById,
  deleteJournalById,
  getJournalsById,
  updateJournalTitle,
} = require("../controllers/journalController");

router.post("/addJournal", createJournal);

router.get("/getJournals", getJournal);

router.get("/getJournalById/:id", getJournalById);

router.delete("/deleteJournalById/:id", deleteJournalById);

router.post("/getJournalsById", getJournalsById);

router.put("/updateTitle", updateJournalTitle);

module.exports = router;
