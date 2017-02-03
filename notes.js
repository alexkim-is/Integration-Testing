module.exports = {

  nextId: 1,

  collection: [],

  getAll() {
    return Promise.resolve(this.collection.slice())
  },

  addOne(newNote) {
    const note = Object.assign({}, newNote, {
      id: this.nextId++,
      timestamp: new Date().toJSON()
    })
    this.collection.push(note)
    return Promise.resolve(note)
  }

}
