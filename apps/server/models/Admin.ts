import { Schema,model } from 'mongoose';


const AdminSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, {timestamps: true})

 const AdminModel = model<IAdmin>('Admin',AdminSchema)

 export default AdminModel