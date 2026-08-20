const patientValidation=(req,res)=>{
    const{name,age,phone_no}=req.body;
    
    if(!name || !age || !phone_no ){
        return res.status(401).json({
            message:"name,age,phone_no are required"
        })
    }

   if(age<=0 || age>120){
    return res.status(400).json({
            message:"Invalid Age"
        })

   }
   if(phone_no.length!==10){
    return res.status(400).json({
            message:"Phone_no must be 10 digit"
        })
   }


}

export {patientValidation}
