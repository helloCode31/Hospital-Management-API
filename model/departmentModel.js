import db from '../config/db.js'

//get patient

const getAlldepartment=(callback)=>{
    db.query("SELECT * FROM department",
        callback
    )
}


//getbyid
const getAllById=(id,callback)=>{
     db.query("SELECT * FROM department WHERE id=?",
        [id], callback
    )
    
}

//add patient
const adddepartment=({name,description},callback)=>{
    db.query("INSERT INTO department(name,description)VALUES(?,?)",
        [name,description],callback
    )
}

//update patient
const updatedepartment=(id,{name,description},callback)=>{
    db.query("UPDATE department SET name=?,description=? WHERE id=?",
        [name,description,id],callback
    )
}

//Delete patient
const deletedepartment=(id,callback)=>{
    db.query("DELETE  FROM department WHERE id=?",
        [id],callback
    )
}

//search by name
const searchbydepartment=(name,callback)=>{
    db.query("SELECT * FROM department WHERE department LIKE ?",
        [`%${department}%`],callback
    )
}

export {getAlldepartment,getAllById,adddepartment,updatedepartment,deletedepartment,searchbydepartment}