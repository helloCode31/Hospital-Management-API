import db from '../config/db.js'

//get
const getAllbill_item=(callback)=>{
    db.query("SELECT * FROM bill_items ",
        callback
    )
}

//getbyid
const getAllById=(id,callback)=>{
     db.query("SELECT * FROM bill_items WHERE id=?",
        [id], callback
    )
    
}

//add patient
const addbill_item=({bill_items_id,items_name,quantity,unit_price,total_amount},callback)=>{
    db.query("INSERT INTO bill_items(bill_items_id,items_name,quantity,unit_price,total_amount)VALUES(?,?,?,?,?)",
        [bill_items_id,items_name,quantity,unit_price,total_amount],callback
    )
}

//update patient
const updatebill_item=(id,{bill_items_id,items_name,quantity,unit_price,total_amount},callback)=>{
     db.query("UPDATE bill_items set bill_items_id=?,item_name=?,quantity=?,unit_price=?,total_amount=? WHERE id=?",
    [bill_items_id,items_name,quantity,unit_price,total_amount,id], callback
    )
    
}

//Delete patient
const deletebill_item=(id,callback)=>{
    db.query("DELETE  FROM bill_items WHERE id=?",
        [id],callback
    )
}




export {getAllbill_item,getAllById,addbill_item,updatebill_item,deletebill_item}