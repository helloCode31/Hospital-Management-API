import express from 'express'
import { getAllPatients,getAllByIds,addPatients,updatePatients,deletePatients,searchbynames,searchbygenders} from "../controller/patientController.js";
import { patientValidation } from '../middleware/patientValidation.js';
import authMiddleware from '../middleware/authMiddleware.js'
const router=express.Router()

router.get("/",authMiddleware,getAllPatients)
router.get("/:id",authMiddleware,getAllByIds)
router.post("/",patientValidation,addPatients)
router.put("/:id",authMiddleware,updatePatients)
router.delete("/:id",authMiddleware,deletePatients)
router.get("/search",searchbynames)
router.get("/search",searchbygenders)




export default router