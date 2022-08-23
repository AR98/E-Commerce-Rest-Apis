import { addProduct, updateProductbyId, deleteProductById, getProductList } from "../services/product.js";

// Create new Product
export const createProduct = async(req, res) => {
    if(!req.body.title || !req.body.price)
        res.status(400).json({msg: "required field missing"});
    try{
        let data = await addProduct(req);
        console.log(data);
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

// Update
export const updateProduct = async(req, res) => {
    if(!req.params.id) res.status(500).json("id required");
    try{
        let data = await updateProductbyId(req.params.id, req.body);
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json({msg: err});
    }
}

// Delete
export const deleteProduct = async(req,res) => {
    if(!req.params.id) res.status(500).json("id required");
    try{
        let data = await deleteProductById(req.params.id);
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({msg: err});
    }
}

export const productList = async(req,res) => {
    try{
        let data = await getProductList(req);
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({msg: err});
    }
}