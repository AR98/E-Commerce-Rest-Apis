import bcrypt from "bcrypt";
import {registerUser, findUserByEmail, updateUserbyEmail, deleteUserByEmail, getUsersList} from "../services/users.js"
import {Users} from "../models/usersModel.js";
import { createToken } from "../auth.js";

// Register
export const register = async(req, res) => {
    try{
        if(!req.body.name || !req.body.email || !req.body.password)
            res.status(400).json({msg: "required field missing"});

            bcrypt.hash(req.body.password, 10).then(hash=>{
                let newUser = new Users({
                    name: req.body.name,
                    password: hash,
                    email: req.body.email,
                    isAdmin: req.body.isAdmin || false
                });
                // console.log(newUser);
                let data = registerUser(newUser);
                res.status(200).json(data);

            }).catch(err=>{
                res.status(500).json({err});
            })
            
    }
    catch (err) {
        res.status(500).json({msg: err});
    }

}

// Login
export const login = async(req, res) => {
    try{
        const {email, password} = req.body;
    const user = await findUserByEmail(email);

    if(!user)
    res.status(401).json({msg: "Wring Credentials!"});

    bcrypt.compare(password, user.password).then(match=>{
        if(!match){
            res.status(401).json("Incorrect password!");
        }else{
            const token = createToken(user);
            res.status(200).json({msg: "login successful", token: token});
        }
    })
    }
    catch (err) {
        res.status(500).json({msg: err});
    }
}

// Update
export const updateUser = async(req, res) => {
    try{
        let data = await updateUserbyEmail(req.user.id, req.body);
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json({msg: err});
    }

}

// Delete
export const deleteUser = async(req,res) => {
    try{
        let data = await deleteUserByEmail(req.params.email);
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({msg: err});
    }
}

// Get All User
export const usersList = async(req,res) => {
    try{
        let data = await getUsersList();
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({msg: err});
    }
}