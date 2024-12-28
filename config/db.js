import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectDb = async()=>{
   try{
       await mongoose.connect(process.env.DB_URL);
       console.log('connected to database');
   }catch(err){
       throw err
   }
}

export default connectDb 
