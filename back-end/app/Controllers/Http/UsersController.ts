import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {

    public async getUserByEmail({ params }: HttpContextContract) {
        const { email } = params
        const user = await User.findBy('email', email)

        if (!user) {
            return { message: 'User not found' }
        }
        return user
    }

}
