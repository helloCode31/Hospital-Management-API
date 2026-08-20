import {getAllmedical_record,getAllById,addmedical_record,updatemedical_record,deletemedical_record,searchbypatient_id} from "../model/medical_recordsModel.js";

//get
const getAllmedical_records=(req,res)=>{
    getAllmedical_record((err,result)=>{
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

const addmedical_records=(req,res)=>{
    const data={
        patient_id,doctor_id,appointment_id,diagnosis,prescription,test_reports,follow_up_date
    }=req.body
    console.log(data)

     addmedical_record(data,(err,result)=>{
        if(err){
            return res.status(500).json(err)
        }

            return res.status(200).json({
                 messgae:"Add Successfully"
            })
    })
}


//update

const updatemedical_records=(req,res)=>{
    const id=req.params.id
    const data={
      patient_id,doctor_id,appointment_id,diagnosis,prescription,test_reports,follow_up_date

    }=req.body
     updatemedical_record(id,data,(err,result)=>{
        if(err){
            return res.status(500).json(err)
        }
        
            return res.status(200).json({
                messgae:"Update Successfully"
            })
    })
}

//delete

const deletemedical_records=(req,res)=>{
    const id=req.params.id
    deletemedical_record(id,(err,result)=>{
        if(err){
            return res.status(500).json(err)
        }
        
            return res.status(200).json({
                message:"Delete Successfully"
            })
    })
}

//Search by patient_id

const searchbypatient_ids=(req,res)=>{
    const {patient_id}=req.query
    
    searchbypatient_id(patient_id,(err,result)=>{
        if(err){
            return res.status(500).json({
                message:"Data Error"
            })
        }
        
            return res.status(200).json(result)
    })


}
export{getAllmedical_records,getAllByIds,addmedical_records,updatemedical_records,deletemedical_records,searchbypatient_ids} 
      