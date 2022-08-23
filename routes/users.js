import express from "express";
import { verifyAuth, verifyAuthAndAdmin } from "../auth.js";
import {register, login, updateUser, deleteUser, usersList} from "../controllers/users.js";

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.put('/update/:id', verifyAuth, updateUser);
router.post('/delete/:email', verifyAuthAndAdmin, deleteUser);
router.get('/allUser', verifyAuthAndAdmin, usersList);


export default router;