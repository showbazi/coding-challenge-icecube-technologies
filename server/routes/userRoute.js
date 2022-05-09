import express from "express";
import {
  getUsers,
  registerUser,
  searchKeyword,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/getusers").get(getUsers);

router.route("/search/:keyword").get(searchKeyword);

export default router;
