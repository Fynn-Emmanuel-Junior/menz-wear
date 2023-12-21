import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    orderId:  {
        type: String,
        required: true
    },
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
    },
    status: {
        type: 'Pending',
        required: true
    }

},{timestamps: true})

const OrderModel = mongoose.model('OrderModel',orderSchema)

export default OrderModel