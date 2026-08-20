import {getAlldepartment,getAllById,adddepartment,updatedepartment,deletedepartment,searchbydepartment} from "../model/departmentModel.js";

//get
const getAlldepartments=(req,res)=>{

    getAlldepartment((err,result)=>{
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

const adddepartments=(req,res)=>{
    const data={
        name:req.body.name,
        description:req.body.description
    }
    console.log(data)
     adddepartment(data,(err,result)=>{
     
        if(err){
            return res.status(500).json(err)
        }

            return res.status(200).json({
                 messgae:"Add Successfully"
            })
    })
}


//update

const updatedepartments=(req,res)=>{
    const id=req.params.id
    const data={
       

    }
     updatedepartment(id,data,(err,result)=>{
        if(err){
            return res.status(500).json(err)
        }
        
            return res.status(200).json({
                messgae:"Update Successfully"
            })
    })
}

//delete

const deletedepartments=(req,res)=>{
    const id=req.params.id
    deletedepartment(id,(err,result)=>{
        if(err){
            return res.status(500).json(err)
        }
        
            return res.status(200).json({
                message:"Delete Successfully"
            })
    })
}
//search by deprtment
const searchbydepartments=(req,res)=>{
    const {department}=req.query

    searchbydepartment(department,(err,result)=>{
        
        if(err){
            return res.status(500).json({
                message:"Data Error"
            })
        }
        return res.status(200).json(result)
        
    })
}
export {getAlldepartments,getAllByIds,adddepartments,updatedepartments,deletedepartments,searchbydepartments}


