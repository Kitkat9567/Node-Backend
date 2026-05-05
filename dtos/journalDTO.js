class Journal {
  constructor(data) {
    this.id = data.id || null;
    this.title = data.title;
    this.content = data.content;
    this.date = data.date;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.deletedAt = data.deletedAt;
  }

  getId() {
    return this.id;
  }

  setId(id) {
    this.id = id;
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }

  getContent() {
    return this.content;
  }

  setContent(content) {
    this.content = content;
  }

  getDate() {
    return this.date;
  }

  setDate(date) {
    this.date = date;
  }

  getCreatedAt() {
    return this.createdAt;
  }

  setCreatedAt(createdAt) {
    this.createdAt = createdAt;
  }

  getUpdatedAt() {
    return this.updatedAt;
  }

  setUpdatedAt(updatedAt) {
    this.updatedAt = updatedAt;
  }

  getDeletedAt() {
    return this.deletedAt;
  }

  setDeletedAt(deletedAt) {
    this.deletedAt = deletedAt;
  }
}

module.exports = Journal;
