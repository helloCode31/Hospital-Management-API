import express from 'express'
import {registerUsers,loginUsers} from '../controller/userControlller.js'
import { loginValidation } from '../middleware/userValidation.js'


const routes=express.Router()

routes.post("/register",registerUsers)
routes.post("/login",loginValidation,loginUsers)

export default  routes