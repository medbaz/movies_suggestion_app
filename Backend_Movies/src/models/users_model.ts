import mongoose, { Schema } from "mongoose";

export type userType = {
    id:Number;
    first_name:String;
    last_name:String;
    email:String;
    password:String;
} 


const usersShema:mongoose.Schema = new Schema({
    id:Number,
    first_name:String,
    last_name:String,
    email:String,
    password:String
})

export default usersShema