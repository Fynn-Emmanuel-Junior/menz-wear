import {model,Schema}  from "mongoose";


const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    imageurls: {
        type: Array,
        required: true,
    }
}, {timestamps: true})

const ProductModel = model('Product',productSchema)

export default ProductModel