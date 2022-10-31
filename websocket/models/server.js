import express from 'express'
import cors from 'cors'
import * as io from 'socket.io'
import { createServer } from 'http'

//const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.server = createServer(this.app)
        this.io = new io.Server(this.server)

        /*
        this.paths = {
            auth:       '/api/auth',
            buscar:     '/api/buscar',
            categorias: '/api/categorias',
            productos:  '/api/productos',
            usuarios:   '/api/usuarios',
            uploads:    '/api/uploads',
        }


        // Conectar a base de datos
        this.conectarDB();

        // Rutas de mi aplicación
        this.routes();
        */

        // Middlewares
        this.middlewares();
    }

    async conectarDB() {
        //await dbConnection();
    }


    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    routes() {
        //this.app.use( this.paths.auth, require('../routes/auth'));        
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}

export default Server;