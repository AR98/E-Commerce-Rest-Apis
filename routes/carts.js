import express from "express";
import { verifyAuth } from "../auth.js";
import {createCart, updateCart, removeItem, getCartItems} from "../controllers/cart.js";

const router = express.Router();

router.post('/create', verifyAuth, createCart);
router.put('/update/:id', verifyAuth, updateCart);
router.post('/delete/:id', verifyAuth, removeItem);
router.get('/allCartItem', verifyAuth, getCartItems);

export default router;