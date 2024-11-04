import * as Yup from 'yup'
import User from '../models/User'





class SessionController {
    async store(request, response) {
        const schema = Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required()
        })

        const isValid = await schema.isValid(request.body)

        if (!isValid) {
            return response.status(401).json({ error: 'Make sure your email or password are correct' })
        }

        const { email, password } = request.body

        const user = await User.findOne({
            where: {
                email,
            }
        })
        if (!user) {
            return response
                .status(401)
                .json({ error: 'Make sure your email or password are correct' })
        }
        const isSamePassword = await user.checkPassword(password)

        if (!isSamePassword) {
            return response
                .status(401)
                .json({ error: 'Make sure your email or password are correct' })
        }

        return response.json({ id: user.id, name: user.name, email, admin: user.admin })
    }
}


export default new SessionController()