import db from '../config/db.js'

//get
const getAllbill=(callback)=>{
    db.query("SELECT * FROM bills ",
        callback
    )
}

//getbyid
const getAllById=(id,callback)=>{
     db.query("SELECT * FROM bills WHERE id=?",
        [id], callback
    )
    
}

//add patient
const addbill=({patient_id,department_id,consultation_fee,medical_charges,test_charges,discount,gst,total_amount},callback)=>{
    db.query("INSERT INTO bills(patient_id,department_id,consultation_fee,medical_charges,test_charges,discount,gst,total_amount)VALUES(?,?,?,?,?,?,?,?)",
        [patient_id,department_id,consultation_fee,medical_charges,test_charges,discount,gst,total_amount],callback
    )
}

//update patient
const updatebill=(id,{patient_id,department_id,consultation_fee,medical_charges,test_charges,discount,gst,total_amount},callback)=>{
     db.query("UPDATE bills set patient_id=?,department_id=?,consultation_fee=?,medical_charges=?,test_charges=?,discount=?,gst=?,total_amount=?",
    [patient_id,department_id,consultation_fee,medical_charges,test_charges,discount,gst,total_amount,id], callback
    )
    
}

//Delete patient
const deletebill=(id,callback)=>{
    db.query("DELETE  FROM bills WHERE id=?",
        [id],callback
    )
}




export {getAllbill,getAllById,addbill,updatebill,deletebill}