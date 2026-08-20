import db from '../config/db.js'

//get patient

const getAllPatient=(callback)=>{
    db.query("SELECT * FROM patient",
        callback
    )
}


//getbyid
const getAllById=(id,callback)=>{
     db.query("SELECT * FROM patient WHERE id=?",
        [id], callback
    )
    
}

//add patient
const addPatient=({name,age,gender,phone_no,address},callback)=>{
    db.query("INSERT INTO patient(name,age,gender,phone_no,address)VALUES(?,?,?,?,?)",
        [name,age,gender,phone_no,address],callback
    )
}

//update patient
const updatePatient=(id,{name,age,gender,phone_no,address},callback)=>{
    db.query("UPDATE patient SET name=?,age=?,gender=?,phone_no=?,address=? WHERE id=?",
        [name,age,gender,phone_no,address,id],callback
    )
}

//Delete patient
const deletePatient=(id,callback)=>{
    db.query("DELETE  FROM patient WHERE id=?",
        [id],callback
    )
}

//search by name
const searchbyname=(name,callback)=>{
    db.query("SELECT * FROM patient WHERE name LIKE ?",
        [`%${name}%`],callback
    )
}
//Search By gender
const searchbygender=(gender,callback)=>{
    db.query=("SELECT * FROM patient WHERE gender LIKE ?")
    [`%${gender}%`],callback
}
export {getAllPatient,getAllById,addPatient,updatePatient,deletePatient,searchbyname,searchbygender}