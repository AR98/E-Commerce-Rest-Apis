import {Users} from "../models/usersModel.js";

export const registerUser = async(obj) => {
    try{
        let data = await obj.save();
        console.log(data);
        return data;
    }
    catch (err) {
        return err;
    }
}

export const findUserByEmail = async(email) => {
    try{
        const user = await Users.findOne({email: email});
        return user;
    }
    catch (err) {
        return err;    
    }
}

export const updateUserbyEmail = async(id, data) => {
    try{
        let updateData = await Users.findOneAndUpdate({_id: id}, {
            $set: data
        });
        return updateData;
    }
    catch (err) {
        return err;    
    }
}

export const deleteUserByEmail = async(email) => {
    try{
        let deletedData = await Users.findOneAndDelete({email: email});
        return deletedData;
    }
    catch (err) {
        return err;
    }
}

export const getUsersList = async() => {
    try{
        let list = await Users.find();
        return list
    }
    catch (err) {
        return err;
    }
}