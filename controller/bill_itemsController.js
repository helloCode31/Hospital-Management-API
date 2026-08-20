import {getAllbill_item,getAllById,addbill_item,updatebill_item,deletebill_item} from "../model/bill_items.js";
//getm} 

const getAllbill_items=(req,res)=>{

    getAllbill_item((err,result)=>{
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

const addbill_items=(req,res)=>{
    const data={
         bill_items_id:req.body.bill_items_id,
       items_name:req.body.items_name,
       quantity:req.body.quantity,
       unit_price:req.body.unit_price,
       total_amount:req.body.total_amount

    }
    console.log(data)
     addbill_item(data,(err,result)=>{
     
        if(err){
            return res.status(500).json(err)
        }

            return res.status(200).json({
                 messgae:"Add Successfully"
            })
    })
}


//update

const updatebill_items=(req,res)=>{
    const id=req.params.id
    const data={
       bill_items_id:req.body.bill_items_id,
       items_name:req.body.items_name,
       quantity:req.body.quantity,
       unit_price:req.body.unit_price,
       total_amount:req.body.total_amount

    }
     updatebill_items(id,data,(err,result)=>{
        if(err){
            return res.status(500).json(err)
        }
        
            return res.status(200).json({
                messgae:"Update Successfully"
            })
    })
}

//delete

const deletebill_items=(req,res)=>{
    const id=req.params.id
    deletebill_items(id,(err,result)=>{
        if(err){
            return res.status(500).json(err)
        }
        
            return res.status(200).json({
                message:"Delete Successfully"
            })
    })
}
export {getAllbill_items,getAllByIds,addbill_items,updatebill_items,deletebill_items}


