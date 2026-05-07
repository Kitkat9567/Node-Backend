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

  async deleteJournalById(id) {
    const result = await Journal.findByIdAndDelete(id);

    return result;
  }

  async findJournalsbyId(ids) {
    const result = await Journal.find({ _id: { $in: ids } }).sort({
      createdAt: -1,
    });

    return result;
  }

  async updateTitlebyId(payload){
    try {
      const bulkOps = payload.map(({id,title})=>({
        updateOne: {
          filter: {_id:id},
          update: {$set:{title}}
        }
      }));

      const result = Journal.bulkWrite(bulkOps);
      return result;
    } catch (error) {
      throw new Error('bulk update failed');
    }
  }
}

module.exports = new JournalRepository();
