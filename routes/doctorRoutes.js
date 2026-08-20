import express from 'express'
const router=express.Router()
import {getAlldoctors,getAllByIds,adddoctors,updatedoctors,deletedoctors, searchbyspecializations} from '../controller/doctorController.js'


router.get("/",getAlldoctors)
router.get("/search",searchbyspecializations)
router.get("/:id",getAllByIds)

router.post("/",adddoctors)
router.put("/:id",updatedoctors)
router.delete("/:id",deletedoctors)


export default router