const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;


const cartSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        required: true,
        unique: true,
        ref: "users",
        trim: true
    },
    items: [{
        productId: {
            type: ObjectId,
            required: true,
            ref: "product",
            trim: true
        },
        quantity: {
            type: Number,
            required: true,
            trim: true
        }
    }],
    totalPrice: {
        type: Number,
        required: true,
        trim: true
    },
    totalItems: {
        type: Number,
        required: true,
        trim: true
    }
}, { timestamps: true });


module.exports = new mongoose.model("Cart", cartSchema);