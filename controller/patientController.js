import { getAllPatient ,getAllById,addPatient,updatePatient,deletePatient,searchbyname,searchbygender} from "../model/patientModel.js";

//get
const getAllPatients=(req,res)=>{
    getAllPatient((err,result)=>{
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

const addPatients=(req,res)=>{
    const data={
        name:req.body.name,
        age:req.body.age,
        gender:req.body.gender,
        phone_no:req.body.phone_no,
        address:req.body.address

    }
     addPatient(data,(err,result)=>{
        if(err){
            return res.status(500).json(err)
        }

            return res.status(200).json({
                 messgae:"Add Successfully"
            })
    })
}


//update

const updatePatients=(req,res)=>{
    const id=req.params.id
    const data={
        name:req.body.name,
        age:req.body.age,
        gender:req.body.gender,
        phone_no:req.body.phone_no,
        address:req.body.address

    }
     updatePatient(id,data,(err,result)=>{
        if(err){
            return res.status(500).json(err)
        }
        
            return res.status(200).json({
                messgae:"Update Successfully"
            })
    })
}

//delete

const deletePatients=(req,res)=>{
    const id=req.params.id
    deletePatient(id,(err,result)=>{
        if(err){
            return res.status(500).json(err)
        }
        
            return res.status(200).json({
                message:"Delete Successfully"
            })
    })
}
//search by name
const searchbynames=(req,res)=>{
    const {name}=req.query

    searchbyname(name,(err,result)=>{
        if(err){
            return res.status(500).json({
                message:"Database error"
            })
        }
        return res.status(200).json(result)
    })

    
}  
 //Search by gender
const searchbygenders=(req,res)=>{
      const {gender}=req.query

    searchbyname(gender,(err,result)=>{
        if(err){
            return res.status(500).json({
                message:"Database error"
            })
        }
        return res.status(200).json(result)
    })

    
}  


export{getAllPatients,getAllByIds,addPatients,updatePatients,deletePatients,searchbynames,searchbygenders} 
      