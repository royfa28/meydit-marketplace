import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export async function register({ request, response }: HttpContextContract) {
    try {
        const userData = request.only(['first_name', 'last_name', 'email', 'password', 'phone_number', 'address', 'user_type'])

        const userExists = await User.findBy('email', userData.email)

        if (userExists) {
            return response.badRequest({ message: 'User already exists' })
        }

        const user = new User()
        user.first_name = userData.first_name
        user.last_name = userData.last_name
        user.email = userData.email
        user.password = userData.password
        user.phone_number = userData.phone_number
        user.user_type = userData.user_type
        user.address = userData.address
        await user.save()
        return response.status(201).json(user)
    } catch (error) {
        return response.status(500).json({ message: 'Server error' })
    }
}

export async function login({ request, response, auth }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    const token = await auth.attempt(email, password)

    return response.json({
        status: 'success',
        token: token.token
    })
}

export async function viewUser({ response, auth }: HttpContextContract) {
    const user = auth.user!

    return response.json({
        status: 'success',
        data: user
    })
}