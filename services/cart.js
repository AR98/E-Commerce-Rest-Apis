import { Cart } from "../models/cartModel.js";

export const addCart = async(data) => {
    try{
        let newCart = new Cart(data);   
        let addedproduct = await newCart.save();
        return addedproduct;
    }
    catch (err) {
        return err;
    }
}

export const updateCartbyId = async(id, data) => {
    try{
        let updateData = await Cart.findOneAndUpdate({_id: id}, {
            $set: data
        });
        return updateData;
    }
    catch (err) {
        return err;    
    }
}

export const deleteFromCart = async(id) => {
    try{
        let deletedData = await Cart.findOneAndDelete({_id: id});
        return deletedData;
    }
    catch (err) {
        return err;
    }
}

export const getCartList = async(id) => {
    try{
        let list = await Cart.find({userId: id});
        return list;
    }
    catch (err) {
        return err;
    }
}