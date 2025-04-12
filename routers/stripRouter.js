import { Router } from "express";
import {
  createCheckoutSession,
  sessionStatus,
} from "../controller/stripeController.js";

const router = Router();
router.post("/create-checkout-session/:reservationID", createCheckoutSession);
router.get("/session-status", sessionStatus);
export default router;
