import Route from '@ioc:Adonis/Core/Route'
import { register, viewUser, login } from "../app/Controllers/Http/UsersController"
import { addJob, jobDetails, getJobs } from "../app/Controllers/Http/JobController"

Route.get('/', async () => { return { hello: 'world' } })

Route.post("/register", register);
Route.post("/login", login);
Route.post("/addJob", addJob);
Route.get("/job-details/:id", jobDetails);
Route.get("/getJobs", getJobs)
Route.get("/user/:id", viewUser);