import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    userRef: {
        type: String,
        required: true
    },
    productname: {
        type: String,
        required: true
    },
    shippingAddress: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    status: {
        type: String
    }

},{timestamps: true})

const OrderModel = mongoose.model('OrderModel',orderSchema)

export default OrderModel