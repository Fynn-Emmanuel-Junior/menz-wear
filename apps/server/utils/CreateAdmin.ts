import AdminModel from '../models/Admin'
import bcrypt from 'bcryptjs'

export async function  CreateAdmin() {
    const pass = 'menzwear@100$%^'
    const adminPassword = await bcrypt.hash(pass,10) 

    try {
        const existingAdmin = await AdminModel.findOne({email: 'fynn.emmanuel100@gmail.com'})

        if(existingAdmin) { 
            console.log('admin already exists.'); 
            return; // If super admin already exists, exit function   

        }

        const adminData = {
            email: 'fynn.emmanuel100@gmail.com',   
            password: adminPassword
        }

        const admin = await AdminModel.create(adminData)  
        console.log('admin created succesfully')

    } catch(err: unknown) {
        if(err instanceof Error) {  
           console.log('Cannot create admin',err.message)      
        }
    }
}