const { ObjectId } = require("mongodb");
const { getDB } = require("../db");
const Journal = require("../dtos/journalDTO");

class JournalRepository {
  constructor() {
    this.collectionName = "journals";
  }

  getCollection() {
    return getDB().collection(this.collectionName);
  }

  async createJournal(journal) {
    const collection = this.getCollection();
    const journalData = {
      title: journal.getTitle(),
      content: journal.getContent(),
      date: journal.getDate(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const result = await collection.insertOne(journalData);
    return { ...journalData, _id: result.insertedId };
  }

  async findAllJournals() {
    const collection = this.getCollection();

    const result = await collection.find().sort({ createdAt: -1}).toArray();

    return result;
  }
}

module.exports = new JournalRepository();
