import mysql from 'mysql2'

const db=mysql.createConnection({
 host:"localhost",
 user:"root",
 password:"8340116161raj",
 database:"Hospital"
})

db.connect((err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Database Connnected")
    }
})

    
export default db