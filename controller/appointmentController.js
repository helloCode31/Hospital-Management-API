import { getAllappointment,getAllById,addappointment,updateappointment,deleteappointment} from "../model/appointmentModel.js";

//get
const getAllappointments=(req,res)=>{
    getAllappointment((err,result)=>{
        if(err){
            return res.status(500).json(err)
        }
        
            return res.status(200).json(result)
    })
}

//getallbyid
const getAllByIds=(req,res)=>{
    const id=req.params.id
    getAllById(id,(err,result)=>{
        if(err){
            return res.status(500).json(err)
        }
        
            return res.status(200).json(result)
    })
}

const addappointments=(req,res)=>{
    const data={
        patient_id:req.body.patient_id,
        doctor_id:req.body.doctor_id,
        appointment_date:req.body.appointment_date,
        appointment_time:req.body.appointment_time,
        reason:req.body.reason,
        status:req.body.status
    
    }
    console.log(data)

     addappointment(data,(err,result)=>{
        if(err){
            return res.status(500).json(err)
        }

            return res.status(200).json({
                 messgae:"Add Successfully"
            })
    })
}


//update

const updateappointments=(req,res)=>{
    const id=req.params.id
    const data={
       patient_id:req.body.patient_id,
        doctor_id:req.body.doctor_id,
        appointment_date:req.body.appointment_date,
        appointment_time:req.body.appointment_time,
        reason:req.body.reason,
        status:req.body.statuss

    }
     updateappointment(id,data,(err,result)=>{
        if(err){
            return res.status(500).json(err)
        }
        
            return res.status(200).json({
                messgae:"Update Successfully"
            })
    })
}

//delete

const deleteappointments=(req,res)=>{
    const id=req.params.id
    deleteappointment(id,(err,result)=>{
        if(err){
            return res.status(500).json(err)
        }
        
            return res.status(200).json({
                message:"Delete Successfully"
            })
    })
}





export{getAllappointments,getAllByIds,addappointments,updateappointments,deleteappointments} 
      