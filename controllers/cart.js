import { addCart, updateCartbyId, deleteFromCart, getCartList} from "../services/cart.js";

// Create new Product
export const createCart = async(req, res) => {
    try{
        let data = await addCart(req.body);
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

// Update
export const updateCart = async(req, res) => {
    if(!req.params.id) res.status(500).json("id required");
    try{
        let data = await updateCartbyId(req.params.id, req.body);
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json({msg: err});
    }
}

// Delete
export const removeItem = async(req,res) => {
    if(!req.params.id) res.status(500).json("id required");
    try{
        let data = await deleteFromCart(req.params.id);
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({msg: err});
    }
}

export const getCartItems = async(req,res) => {
    try{
        let data = await getCartList(req.user.id);
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({msg: err});
    }
}