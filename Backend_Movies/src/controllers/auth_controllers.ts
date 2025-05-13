import express , {Request, Response} from 'express'
import USER from '../models/users_model'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { log } from 'console'


const sign_in = async (req:Request,res:Response):Promise<any> => {

    try {
        const {email,password} = await req.body
        
        const user = await USER.findOne({email:email})
        if(!user){
            return res.status(400).json({message:"Invalid credentials"})
        }
        
        const isMatch =  await bcrypt.compare(password , user.password as string )



    if(!isMatch){
        return res.status(400).json({message:"Invalid credentials"})
    }
    
    const token = jwt.sign({userId:user.id},process.env.JWT_AUTH_KEY as string , {expiresIn:'1d'})
    res.cookie('auth_token',token,{httpOnly:true,secure:process.env.NODE_ENV === 'production',maxAge:86400000
    })

    return res.status(200).json({message:"logged in successfully "})

    } catch (error) {
        res.status(500).json({message:'something went wrong'})
    }
    


}



export {sign_in}