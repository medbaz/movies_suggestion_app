import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcryptjs'
export type userType = {
    _id:Number;
    first_name:String;
    last_name:String;
    email:String;
    password:String;
} 


const UsersShema:mongoose.Schema = new Schema({
    first_name:{type:String},
    last_name:{type : String},
    email:{type:String , required:true , unique:true}, 
    password:{type:String , required:true }
})

UsersShema.pre('save',async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password as string,8);
    }
    next();
})

const USER = mongoose.model<userType>('USER',UsersShema)



export default USER