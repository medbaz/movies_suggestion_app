import { Request , Response } from "express"
import USER from "../models/users_model"
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const validator = require('validator') 


const add_user = async (req: Request, res: Response):Promise<any> => {
    
  
    try {
      const { email, password, first_name, last_name } = req.body;
      let user = await USER.findOne({ email });
      if (user) {
        return res.status(400).json({ message: "user exicte alrealy" });
      }
    
      // VALIDATE DATA
      if (!email || !password || !first_name || !last_name) {
        return res.status(400).json({ message: "all fields are required" });
      }
    
      if (!validator.isEmail(email)) {
        return res.status(400).json({ message: "please enter a valide email" });
      }
    
      const options = {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 0,
        minNumbers: 1,
        minSymbols:0,
      };
      if (!validator.isStrongPassword(password, options)) {
        return res.status(400).json({ message: "please enter a strong password" });
      }
      // create user and encrypt pass
      user = new USER(req.body);
      await user.save();
      

      // create a jwt
      const token = jwt.sign(
        { user_id: user._id },
        process.env.JWT_AUTH_KEY as string,
        { expiresIn: "1d" }
      );
  
      // save the token in the client side
      res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 86400000,
      });
  
      return res.status(200).json({ message: "user added succussfully" });
    } catch (error) {
      return res.status(404).json({ message: "unable to add user" });
    }
  };
  

const delet_user = async (req:Request,res:Response):Promise<any> => {
    try {
        await USER.deleteMany({email:req.body.email})
        return res.status(200).json({massage:'user deleted succussfully'})
    } catch (error) {
        return res.status(400).json({massage:'smething went wrong delet_user controller '})
    }
}


export {add_user,delet_user}
