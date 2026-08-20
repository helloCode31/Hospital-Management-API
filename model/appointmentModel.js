import db from '../config/db.js'

//get
const getAllappointment=(callback)=>{
    db.query("SELECT * FROM appointment ",
        callback
    )
}

//getbyid
const getAllById=(id,callback)=>{
     db.query("SELECT * FROM appointment WHERE id=?",
        [id], callback
    )
    
}

//add patient
const addappointment=({patient_id,doctor_id,appointment_date,appointment_time,reason,status},callback)=>{
    db.query("INSERT INTO appointment(patient_id,doctor_id,appointment_date,appointment_time,reason,status)VALUES(?,?,?,?,?,?)",
        [patient_id,doctor_id,appointment_date,appointment_time,reason,status],callback
    )
}

//update patient
const updateappointment=(id,{patient_id,doctor_id,appointment_date,appointment_time,reason,status},callback)=>{
     db.query("UPDATE appointment set patient_id=?,doctor_id=?,appointment_date=?,appointment_time=?,reason=?,status=?}status=?",
        [patient_id,doctor_id,appointment_date,appointment_time,reason,status,id], callback
    )
    
}

//Delete patient
const deleteappointment=(id,callback)=>{
    db.query("DELETE  FROM appointment WHERE id=?",
        [id],callback
    )
}

export {getAllappointment,getAllById,addappointment,updateappointment,deleteappointment}