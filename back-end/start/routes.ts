import Route from '@ioc:Adonis/Core/Route'
import { register, viewUser, login } from "../app/Controllers/Http/UsersController"

Route.get('/', async () => { return { hello: 'world' } })

Route.post("/register", register);
Route.post("/login", login);
Route.get("/user/:email", viewUser);