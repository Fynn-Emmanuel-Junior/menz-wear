import {Schema,model} from 'mongoose'

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number
    },
    shippingAddress: {
        type: String
    }
},{timestamps: true})

const UserModel = model('User', userSchema)

export default UserModel