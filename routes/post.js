import express from "express";
import Data from "../models/data.js"

const router = express.Router();
router.use(express.json());

export default router.post('/',async (req,res)=>{
  
  const { fullname , dob , email } = req.body;

  if(!(fullname , dob , email)){res.status(400).send('please enter the details')}
    
    try{
      const newData = new Data({ fullname , dob , email});

      await newData.save();
       if(newData){
             return res.status(200).send(`data created `);
       }else{
             return res.status(401).send(`data not creted`);
       }
    }catch(err){
         console.log(err);
    }; 
})
