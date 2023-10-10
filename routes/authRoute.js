import express from "express";
import {
  test,
} from "../controllers/authController.js";
const router = express.Router();

router.post("/mongodb", test);


export default router;