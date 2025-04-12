import { Router } from "express";
import { getRoomDetails } from "../controller/roomsController.js";
const router = Router();
router.get("/roomDetails/:roomName", getRoomDetails);
export default router;
