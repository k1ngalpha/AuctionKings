import express from "express";
import { signIn, signOut, signUp } from "../controllers/authController.js";

const router = express.Router();

// /api/user/sign-in
router.post("/sign-in", signIn);

router.post("/sign-up", signUp);

export default router;
