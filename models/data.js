import mongoose from "mongoose";

const datascheme = new mongoose.Schema(
  {
    fullname : {
      type:String,
      required : true 
    },
    dob:{
      type: String,
      required : true 
    },
    email:{
      type:String,
      required : true 
    }
  },{
    collection : 'data',
    timestamps : true,
  }
)

export default mongoose.model('data',datascheme);
