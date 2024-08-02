import { Router } from "express";
import {
  getUser,
  getUserHistory,
  loginUser,
  registerUser,
  logoutUser,
} from "../controller/user.js";
import { jwtAuthMiddleware } from "../utils/jwt.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/").get(jwtAuthMiddleware, getUser);
router.route("/history").get(jwtAuthMiddleware, getUserHistory);
router.route("/logout").delete(logoutUser);

export default router;
