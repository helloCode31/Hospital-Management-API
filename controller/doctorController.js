import {getAlldoctor,getAllById,adddoctor,updatedoctor,deletedoctor,searchbyspecialization } from "../model/doctorModel.js";

//get
const getAlldoctors=(req,res)=>{
    getAlldoctor((err,result)=>{
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

const adddoctors=(req,res)=>{
    const data={
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        department_id:req.body.department_id,
        specialization:req.body.specialization,
        qualification:req.body.qualification,
        experience:req.body.experience,
        gender:req.body.gender,
        status:req.body.status
      

    }
    console.log(data)

     adddoctor(data,(err,result)=>{
        if(err){
            return res.status(500).json(err)
        }

            return res.status(200).json({
                 messgae:"Add Successfully"
            })
    })
}


//update

const updatedoctors=(req,res)=>{
    const id=req.params.id
    const data={
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        department_id:req.body.department_id,
        specialization:req.body.specialization,
        qualification:req.body.qualification,
        experience:req.body.experience,
        gender:req.body.gender,
        status:req.body.status

    }
     updatedoctor(id,data,(err,result)=>{
        if(err){
            return res.status(500).json(err)
        }
        
            return res.status(200).json({
                messgae:"Update Successfully"
            })
    })
}

//delete

const deletedoctors=(req,res)=>{
    const id=req.params.id
    deletedoctor(id,(err,result)=>{
        if(err){
            return res.status(500).json(err)
        }
        
            return res.status(200).json({
                message:"Delete Successfully"
            })
    })
}

//Search by Specialization

const searchbyspecializations=(req,res)=>{
    const {specialization}=req.query
    
    searchbyspecialization(specialization,(err,result)=>{
        if(err){
            return res.status(500).json({
                message:"Data Error"
            })
        }
        
            return res.status(200).json(result)
    })


}
export{getAlldoctors,getAllByIds,adddoctors,updatedoctors,deletedoctors,searchbyspecializations} 
      