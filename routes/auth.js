import express from "express";

const router = express.Router();

import { register, login } from "../controller/auth";

router.post("/register", register);
router.post("/login", login);

module.exports = router;
