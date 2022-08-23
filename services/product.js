import { Product } from "../models/productModel.js";

export const addProduct = async(data) => {
    try{
        let newProduct = new Product({
            title: data.body.title,
            price: data.body.price,
            color: data.body.color,
            categories: data.body.categories,
            size: data.body.size,
            desc: data.body.desc
        });
        // console.log(newProduct);
        
        let addedproduct = await newProduct.save();
        console.log(addedproduct);
        return addedproduct;
    }
    catch (err) {
        return err;
    }
}

export const updateProductbyId = async(id, data) => {
    try{
        let updateData = await Product.findOneAndUpdate({_id: id}, {
            $set: data
        });
        return updateData;
    }
    catch (err) {
        return err;    
    }
}

export const deleteProductById = async(id) => {
    try{
        let deletedData = await Product.findOneAndDelete({_id: id});
        return deletedData;
    }
    catch (err) {
        return err;
    }
}

export const getProductList = async(req) => {
    let newP = req.query.new;
    let category = req.query.category;
    try{
        let list
        if(newP){
            list = await Product.find({}).sort({createdAt: -1});
        }
        else if (category){
            list = await Product.find({categories: { $in: [category]}});
        }
        else{
            list = await Users.find();
        }

        return list
    }
    catch (err) {
        return err;
    }
}