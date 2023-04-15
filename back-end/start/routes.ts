import Route from '@ioc:Adonis/Core/Route'
import { register, viewUser } from "../app/Controllers/Http/UsersController"

Route.get('/', async () => { return { hello: 'world' } })

Route.post("/register", register);