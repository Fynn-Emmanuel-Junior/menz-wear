import mongoose from 'mongoose'
import { nanoid} from 'nanoid'

const orderSchema = new mongoose.Schema({
    orderId: nanoid(),
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
        type: String
    }

},{timestamps: true})

const OrderModel = mongoose.model('OrderModel',orderSchema)

export default OrderModel