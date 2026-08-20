const loginValidation=(req,res,next)=>{
    const {email,password}=req.body

    if( !email || !password){
      
        return res.status(401).json({
            message:"email,password are required"
        })

    }

    const  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        return res.status(401).json({
            message:"Invalid Email"
        })
    
}
if (password<6){
    return res.status(401).json({
            message:"Password not More than 6"
        })
    
}
next()

}

export {loginValidation}