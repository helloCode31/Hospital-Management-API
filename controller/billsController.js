import {getAllbill,getAllById,addbill,updatebill,deletebill} from '../model/billsModel.js'


//get
const getAllbills=(req,res)=>{

    getAllbill((err,result)=>{
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

const addbills=(req,res)=>{
    const data={
       
       patient_id:req.body.patient_id,
       department_id:req.body.department_id,
       consultation_fee:req.body.consultation_fee,
       medical_charges:req.body.medical_charges,
       test_charges:req.body.test_charges,
       discount:req.body.discount,
       gst:req.body.gst,
       total_amount:req.body.total_amount
    }
    console.log(data)
     addbill(data,(err,result)=>{
     
        if(err){
            return res.status(500).json(err)
        }

            return res.status(200).json({
                 messgae:"Add Successfully"
            })
    })
}


//update

const updatebills=(req,res)=>{
    const id=req.params.id
    const data={
        patient_id:req.body.patient_id,
       department_id:req.body.department_id,
       consultation_fee:req.body.consultation_fee,
       medical_charges:req.body.medical_charges,
       test_charges:req.body.test_charges,
       discount:req.body.discount,
       gst:req.body.gst,
       total_amount:req.body.total_amount

    }
     updatebill(id,data,(err,result)=>{
        if(err){
            return res.status(500).json(err)
        }
        
            return res.status(200).json({
                messgae:"Update Successfully"
            })
    })
}

//delete

const deletebills=(req,res)=>{
    const id=req.params.id
    deletebill(id,(err,result)=>{
        if(err){
            return res.status(500).json(err)
        }
        
            return res.status(200).json({
                message:"Delete Successfully"
            })
    })
}

//generate bills

const generatebills=(req,res)=>{
    const data={
        patient_id:req.body.patient_id,
       department_id:req.body.department_id,
       consultation_fee:req.body.consultation_fee,
       medical_charges:req.body.medical_charges,
       test_charges:req.body.test_charges,
       discount:req.body.discount,
       gst:req.body.gst

    }
    const subtotal=
    NUMBER(consultation_fee)+
    NUMBER(medical_charges)+
    NUMBER(test_charges)

 const afterDiscount=subtotal-NUMBER(GST || 0);
 const gstAmount=(afterDiscount*NUMBER(gst||0))/100;
 const total_amount=afterDiscount +gstAmount
 
 res.status(200).json({
    message:"Bill generated Successsfully",
    patient_id,
       department_id,
       consultation_fee,
       medical_charges,
       test_charges,
       discount,
       gst


 })
}

export {getAllbills,getAllByIds,addbills,updatebills,deletebills,generatebills}


