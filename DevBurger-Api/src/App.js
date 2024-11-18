import express from 'express'
import  routes  from './Routes'
import { resolve } from 'node:path'

import './database/index'


class App {
    constructor(){
        this.app = express()

        this.middleware()
        this.Routes()
    }

    middleware(){
        this.app.use(express.json())
        this.app.use('/product-file', express.static(resolve(__dirname, '..', 'uploads')))
        this.app.use('/category-file', express.static(resolve(__dirname, '..', 'uploads')))
    }

    Routes(){
        this.app.use(routes)
    }
}

export default new App().app