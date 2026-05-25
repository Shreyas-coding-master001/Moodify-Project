import express from "express";
import { registerController, loginController, LogoutController, getUserController } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const authRouter = express.Router();

// Register Route
authRouter.post("/register", registerController);
// Login Route
authRouter.post("/login", loginController);
// Get User Route
authRouter.get("/get-user", authMiddleware, getUserController);
// Logout Route
authRouter.get("/logout", authMiddleware, LogoutController);

export default authRouter;