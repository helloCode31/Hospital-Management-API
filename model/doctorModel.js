import db from '../config/db.js'

//get
const getAlldoctor=(callback)=>{
    db.query("SELECT * FROM doctor ",
        callback
    )
}

//getbyid
const getAllById=(id,callback)=>{
     db.query("SELECT * FROM doctor WHERE id=?",
        [id], callback
    )
    
}

//add patient
const adddoctor=({name,email,phone,department_id,specialization,qualification,experience,gender,status},callback)=>{
    db.query("INSERT INTO doctor(name,email,phone,department_id,specialization,qualification,experience,gender,status)VALUES(?,?,?,?,?,?,?,?,?)",
        [name,email,phone,department_id,specialization,qualification,experience,gender,status],callback
    )
}

//update patient
const updatedoctor=(id,{name,email,phone,department_id,specialization,qualification,experience,gender,status},callback)=>{
     db.query("UPDATE doctor set name=?,email=?,phone=?,department_id=?,specialization=?,qualification=?,experience=?,gender=?,status=?",
        [name,email,phone,department_id,specialization,qualification,experience,gender,status,id], callback
    )
    
}

//Delete patient
const deletedoctor=(id,callback)=>{
    db.query("DELETE  FROM doctor WHERE id=?",
        [id],callback
    )
}


//search by specialization
const searchbyspecialization=(specialization,callback)=>{
    db.query("SELECT * FROM doctor WHERE specialization LIKE ?",
        [`%${specialization}%`],callback
    )
    }

export {getAlldoctor,getAllById,adddoctor,updatedoctor,deletedoctor,searchbyspecialization}