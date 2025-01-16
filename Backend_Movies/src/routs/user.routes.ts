import express , {Request,Response, Router} from 'express' ;




const router = Router()

router.get('/add_user', async (req:Request,res:Response) => {
    res.json({message:"goood work"})
})
export default  router

