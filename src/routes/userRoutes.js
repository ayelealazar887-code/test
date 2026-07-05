import express from "express";
import { getAllUsers, CreateUser, getUserById, UpdateUser, DeleteUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/user", getAllUsers);
router.post("/user", CreateUser);
router.get("/user/:id", getUserById);
router.put("/user/:id", UpdateUser);
router.delete("/user/:id", DeleteUser);

export default router;