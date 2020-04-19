//Core da Aplicação
import express from 'express'
import routes from './routes';
import cors from 'cors'
import './config/database.js'

class App{
    constructor(){
        this.server = express()
        this.server.use(express.json())
        this.server.use(cors())
        this.routes();
        this.middleware();
    }
    routes(){
        this.server.use(routes)
    }
    middleware(){

    }
}

export default new App().server;