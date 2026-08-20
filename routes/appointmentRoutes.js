import express from 'express'
const router=express.Router()
import {getAllappointments,getAllByIds,addappointments,updateappointments,deleteappointments} from '../controller/appointmentController.js'


router.get("/",getAllappointments)

router.get("/:id",getAllByIds)

router.post("/",addappointments)
router.put("/:id",updateappointments)
router.delete("/:id",deleteappointments)


export default router