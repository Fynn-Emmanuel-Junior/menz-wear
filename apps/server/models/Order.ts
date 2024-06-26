import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    productName: {
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
    }

},{timestamps: true})

const OrderModel = mongoose.model('OrderModel',orderSchema)

export default OrderModel