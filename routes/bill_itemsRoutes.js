
import express from 'express'
const router=express.Router()
import {getAllbill_items,getAllByIds,addbill_items,updatebill_items,deletebill_items} from '../controller/bill_itemsController.js'


router.get("/",getAllbill_items)

router.get("/:id",getAllByIds)

router.post("/",addbill_items)
router.put("/:id",updatebill_items)
router.delete("/:id",deletebill_items)


export default router