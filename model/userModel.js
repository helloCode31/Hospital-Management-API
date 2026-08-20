import db from '../config/db.js'

const registerUser=({name,email,password,role},callback)=>{
    db.query("INSERT INTO users(name,email,password,role)VALUES(?,?,?,?)",
        [name,email,password,role],callback
    )
}

const loginUser=({email},callback)=>{
   db.query("SELECT * FROM users WHERE email=?",
        [email],callback
    )
}


export {registerUser,loginUser}