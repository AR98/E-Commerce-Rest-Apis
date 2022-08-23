import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        require: true
    },
    categories: {
        type: Array
    },
    color: {
        type: String
    },
    size: {
        type: String
    },
    price: {
        type: Number,
        required: true
    }
}, {timestamps: true});

export const Product = mongoose.model("Products", productSchema);

