import express from "express";
import Data from "../models/data.js"

const router = express.Router();

export default router.get('/',async (req,res)=>{

    try{ 
      let data = await Data.find()
       if(data){
             return res.status(200).send(data);
       }else{
             return res.status(401).send(`no data exist`);
       }
    }catch(err){
         console.log(err)
    }; 
})
