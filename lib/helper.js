
const mongoose = require('mongoose')
const PORT = process.env.PORT

require('dotenv').config()

/**
 * Función cb al levantar el servidor
 */
const appListen = () => {
    console.log(`Server Started at ${PORT}`)
}

/**
 * Establecemos la conexión con la base de datos
 */
const DB_connection = () => mongoose.connect(process.env.DATABASE_URL).then((result) => console.info('OK'))
    .catch((err) => console.error(Error))



module.exports = {
    appListen, DB_connection
}