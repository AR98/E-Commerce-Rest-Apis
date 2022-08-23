import express from "express";
import { verifyAuthAndAdmin } from "../auth.js";
import { createProduct, updateProduct, deleteProduct, productList} from "../controllers/products.js";

const router = express.Router();

router.post('/create',verifyAuthAndAdmin, createProduct);
router.put('/update/:id', verifyAuthAndAdmin, updateProduct);
router.post('/delete/:id', verifyAuthAndAdmin, deleteProduct);
router.get('/allProduct', productList);

export default router;