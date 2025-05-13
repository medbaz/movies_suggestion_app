import express , {Request,Response, Router} from 'express' ;
import {add_user,delet_user} from '../controllers/user_controllers'



const router = Router()
router.post('/register', add_user)
router.post('/delete_user',delet_user)

export default  router

