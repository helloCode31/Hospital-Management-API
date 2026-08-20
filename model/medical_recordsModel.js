import db from '../config/db.js'

//get patient

const getAllmedical_record=(callback)=>{
    db.query("SELECT * FROM medical_records",
        callback
    )
}


//getbyid
const getAllById=(id,callback)=>{
     db.query("SELECT * FROM medical_records WHERE id=?",
        [id], callback
    )
    
}

//add patient
const addmedical_record=({patient_id,doctor_id,appointment_id,diagnosis,prescription,test_reports,follow_up_date},callback)=>{
     db.query("INSERT INTO medical_records(patient_id,doctor_id,appointment_id,diagnosis,prescription,test_reports,follow_up_date)VALUES(?,?,?,?,?,?,?)",
        [patient_id,doctor_id,appointment_id,diagnosis,prescription,test_reports,follow_up_date],callback
    )
}

//update patient
const updatemedical_record=(id,{patient_id,doctor_id,appointment_id,diagnosis,prescription,test_reports,follow_up_date},callback)=>{
    db.query("UPDATE medical_records SET patient_id=?,doctor_id=?,appointment_id=?,diagnosis=?,prescription=?,test_reports=?,follow_up_date=? WHERE id=?",
        [patient_id,doctor_id,appointment_id,diagnosis,prescription,test_reports,follow_up_date,id],callback
    )
}

//Delete patient
const deletemedical_record=(id,callback)=>{
    db.query("DELETE  FROM medical_records WHERE id=?",
        [id],callback
    )
}

//search by patient_id
const searchbypatient_id=(patient_id,callback)=>{
    db.query("SELECT * FROM patient WHERE patient_id LIKE ?",
        [`%${patient_id}%`],callback
    )
}

export {getAllmedical_record,getAllById,addmedical_record,updatemedical_record,deletemedical_record,searchbypatient_id}