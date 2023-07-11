const mongoose = require('mongoose')
const { Schema } = mongoose
const BookSchema = new Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    writer: { type: String, required: true },
    pusblishedDate: { type: Date, required: true, default: Date.now() },
    category: { type: String, required: true }
})

const Book = mongoose.model('Book', BookSchema)

module.exports = Book