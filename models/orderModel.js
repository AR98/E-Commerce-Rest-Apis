import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    Products: [
        {
            productId: {
                type: String
            },
            quntity: {
                type: Number,
                default: 1,

            }
        }
    ],
    amount: {
        type: Number,
        required: true
    },
    address: {
        type: Object,
        required: true
    },
    status: {
        type: String,
        default: "Pending"
    }
}, {timestamps: true});

export const Order = mongoose.model("Orders". orderSchema);

