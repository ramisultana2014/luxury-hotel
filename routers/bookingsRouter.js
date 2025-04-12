import { Router } from "express";
import { validateReservationInput } from "../middleware/validationMiddleWare.js";
import { createReservationApi } from "../controller/bookingController.js";
const router = Router();
router.post(
  "/createReserVation",
  validateReservationInput,
  createReservationApi
);
export default router;
