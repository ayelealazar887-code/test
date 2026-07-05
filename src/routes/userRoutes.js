import express from "express";

const router = express.Router();

router.get("/user", getAllUser);
router.post("/user", CreateUser);
router.get("/user/:id", getUserById);
router.put("/user/:id", UpdateUser);
router.delete("/user/:id", DeleteUser);