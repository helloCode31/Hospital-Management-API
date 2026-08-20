import express from 'express'
const router=express.Router()
import {getAllmedical_records,getAllByIds,addmedical_records,updatemedical_records,deletemedical_records,searchbypatient_ids} from '../controller/medical_recordsControlller.js'


router.get("/",getAllmedical_records)
router.get("/search",searchbypatient_ids)
router.get("/:id",getAllByIds)

router.post("/",addmedical_records)
router.put("/:id",updatemedical_records)
router.delete("/:id",deletemedical_records)


export default router