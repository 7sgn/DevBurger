import express from 'express'
import  routes  from './Routes'


class App {
    constructor(){
        this.app = express()

        this.middleware()
        this.Routes()
    }

    middleware(){
        this.app.use(express.json())
    }

    Routes(){
        this.app.use(routes)
    }
}

export default new App().app