import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app=express();
import userRoutes from './routes/userRoutes.js'
import patientRoutes from './routes/patientRoutes.js'
import doctorRoutes from './routes/doctorRoutes.js'
import appointmentRoutes from './routes/appointmentRoutes.js'
import departmentRoutes from './routes/departmentRoutes.js'
import billsRoutes from './routes/billsRoutes.js'
import bill_itemsRoutes from './routes/bill_itemsRoutes.js'
import medical_records from './routes/medical_recordsRoutes.js'


app.use(express.json())
app.use("/api/users",userRoutes)
app.use("/patients",patientRoutes)
app.use("/doctors",doctorRoutes)
app.use("/appointments",appointmentRoutes)
app.use("/departments",departmentRoutes)
app.use("/bills",billsRoutes)
app.use("/bill_items",bill_itemsRoutes)
app.use("/medical_records",medical_records)


app.listen(3200,()=>{
    console.log("Server working")
})
