
import express from 'express'
const router=express.Router()
import {getAllbills,getAllByIds,addbills,updatebills,deletebills} from '../controller/billsController.js'


router.get("/",getAllbills)

router.get("/:id",getAllByIds)

router.post("/",addbills)
router.put("/:id",updatebills)
router.delete("/:id",deletebills)


export default router