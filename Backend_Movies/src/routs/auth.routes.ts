import {Router} from "express"
import {sign_in} from "../controllers/auth_controllers"


const router = Router()

router.post('/sign_in',sign_in)


export default router