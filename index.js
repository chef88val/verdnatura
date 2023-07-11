const express = require('express');
const { appListen, DB_connection } = require('./lib/helper');
const { logger } = require('./logger');
const router_book = require('./modules/book/routes');

require('dotenv').config();

const PORT = process.env.PORT;

const app = express();

async function init() {
    //
    const conn = await DB_connection();
    if (!conn) console.error('CONNECTION NOT ESTABLISHED');
    run();
}

function run() {
    app.use(express.json());
    // Activación de los middlewares
    app.use(logger);
    //Definición de las rutas disponibles
    app.use('/api/book', logger, router_book)
    app.get('/health', logger, (req, res) => {
        res.status(200)
    })

    //Pones la aplicación en escucha
    app.listen(PORT, appListen);
}
init();