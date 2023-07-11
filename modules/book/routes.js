const express = require("express");

const router_book = express.Router()

const {
    get,
    getById,
    post,
    put, 
    remove
} = require('./controller.js')
// obtener la lista de todos los libros.
router_book.get('/', get)

// Obtener los detalles de un libro en particular
router_book.get('/:bookID', getById)

// Registra un nuevo libro
router_book.post('/', post)

// Actualiza la información de un libro
router_book.put('/:bookID', put)

// Elimina un libro
router_book.delete('/:bookID', remove)

module.exports = router_book