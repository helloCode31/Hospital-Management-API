import {registerUser,loginUser} from '../model/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const registerUsers=async(req,res)=>{
    try{
    const password=req.body.password
    //bcrypt
    const hashpassword=await
    bcrypt.hash(password,10)

    const data={
        name:req.body.name,
        email:req.body.email,
        password:hashpassword,
        role:req.body.role
    }
    registerUser(data,(err,result)=>{
       if(err){
        return res.status(500).json({
            message:err.message
        })
    }
   
       
       else{
        return res.status(200).json({
            message:"User Registered Successfully"
        })
       }
    })
}catch(err){
       return res.status(500).json({
        message:err.message
       })
}
}


//login
const loginUsers=async(req,res)=>{
    const data={
        email:req.body.email,
        password:req.body.password
    
    }
    

    loginUser(data,async(err,result)=>{
       if(err){
        return res.status(500).json(err)
       }
       if(result.length===0){
             return res.status(401).json({
                message:"Invalide email & password"
             })
       }
        //match password
    const match=await
    bcrypt.compare(data.password,result[0].password)

    if(!match)
    {
            return res.status(401).json({
                message:"Invalid Password"
            })
    }
   
    //TOKEN
   const token=jwt.sign(
    {
        id:result[0].id,
        email:result[0].email,
        password:result[0].password
    },
    process.env.JWT_SECRET,
    {
    expiresIn:"1d"
    }
   )
    
       {
        return res.status(200).json({
            message:"Login Successfully",
            token:token

        })
       }
    })
}


export{registerUsers,loginUsers}