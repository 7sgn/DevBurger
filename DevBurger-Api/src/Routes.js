import { Router } from 'express'
import { v4 } from 'uuid'

import User from './app/models/Users.js'

const routes = new Router()

routes.get('/', async (request, response) => {
    const user = await User.create({
        id: v4(),
        name: 'Marlon',
        email: 'sette562@gmail.com',
        passworld_hash: '12345'

    })
    return response.status(200).json({user})

})

export default routes