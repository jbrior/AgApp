const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter product name"]
        },
        items: {
            type: Array,
            required: true,
            default: 0
        },
        longitude: {
            type: Number,
            required: true,
            default: 0
        },
        latitude: {
            type: Number,
            required: true,
            default: 0
        },
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;