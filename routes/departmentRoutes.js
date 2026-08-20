import express from 'express'
const router=express.Router()
import {getAlldepartments,getAllByIds,adddepartments,updatedepartments,deletedepartments,searchbydepartments} from '../controller/departmentController.js'


router.get("/",getAlldepartments)

router.get("/:id",getAllByIds)

router.post("/",adddepartments)
router.put("/:id",updatedepartments)
router.delete("/:id",deletedepartments)


export default router