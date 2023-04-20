import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import jwt from 'jsonwebtoken'

import User from 'App/Models/User'

export async function register({ request, response }: HttpContextContract) {
    try {
        const userData = request.only(['first_name', 'last_name', 'email', 'password', 'phone_number', 'address', 'user_type'])
        const hashedPassword = await Hash.make(userData.password);

        const userExists = await User.findBy('email', userData.email)

        if (userExists) {
            return response.badRequest({ message: 'User already exists' })
        }

        const user = new User()
        user.first_name = userData.first_name
        user.last_name = userData.last_name
        user.email = userData.email
        user.password = hashedPassword
        user.phone_number = userData.phone_number
        user.user_type = userData.user_type
        user.address = userData.address
        await user.save()
        return response.status(201).json(user)
    } catch (error) {
        return response.status(500).json({ message: 'Server error' })
    }
}

export async function login({ request, response }: HttpContextContract) {

    const validationSchema = schema.create({
        email: schema.string({}, [rules.email()]),
        password: schema.string({})
    })

    const userDetails = await request.validate({
        schema: validationSchema,
        messages: {
            'email.required': 'Please enter your email',
            'email.email': 'Please enter a valid email address',
            'password.required': 'Please enter your password'
        }
    })

    const user = await User.query().where('email', userDetails.email).first()

    if (!user) {
        return response.status(400).json({ error: 'Invalid email or password' })
    }

    // Function to read the hashed value from database and compare it with the passwword from user
    const isPasswordValid = await Hash.verify(user.password, userDetails.password)

    if (!isPasswordValid) {
        return response.status(400).json({ error: 'Invalid email or password' })
    }

    const token = jwt.sign({ id: user.id, user_type: user.user_type }, 'yourSecretKey', { expiresIn: '1h' })

    return response.json({ message: 'Logged in successfully', token: token })
}

export async function viewUser({ params }: HttpContextContract) {
    const id = params.id

    try {
        const user = await User.find(id)
        if (user) {
            return user
        } else {
            return { error: `User with email ${id} not found` }
        }
    } catch (error) {
        return { error: error.message }
    }
}