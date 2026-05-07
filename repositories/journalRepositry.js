const Journal = require("../models/journalModel");

class JournalRepository {
  constructor() {
    this.collectionName = "journals";
  }

  async createJournal(journal) {
    const result = await journal.save();
    return result;
  }

  async findAllJournals() {
    const result = await Journal.find().sort({ createdAt: -1 });

    return result;
  }

  async findJournalById(id) {
    const result = await Journal.findById(id);

    return result;
  }
}

module.exports = new JournalRepository();
