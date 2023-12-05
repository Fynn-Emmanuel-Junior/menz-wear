import { Schema,model } from 'mongoose';


interface IAdmin {
    username: string,
    email: string,
    password: string
}

const AdminSchema = new Schema<IAdmin>({
    username: {
        type: String,
        required: true,
    },
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