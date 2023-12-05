import { AdminSignupValidation,AdminLoginValidation } from './../validations/AdminValidations';
import AdminModel from '../models/Admin'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { Request,Response } from 'express';


export const registerController = async (req:Request,res:Response) => {
    const {error} = AdminSignupValidation(req.body)

    if(error) return res.status(400).json({message: `error in creating Admin: ${error.message}`})

    const {username,email,password} = req.body

    const checkIfEmailExists = await AdminModel.findOne({email})
    if(checkIfEmailExists) return res.status(409).json('Admin already exists')

    const salt = await bcrypt.genSalt(10)

    const hashedpassword = await bcrypt.hash(password,salt)

    try {
        const newAdmin = await AdminModel.create({
            username: username,
            email: email,
            password: hashedpassword,
        })

        res.status(200).json('Admin created')
    } catch (err: unknown) {
        if(err instanceof Error) return res.status(400).json({message: err.message})
    }
}

export const loginController = async () => {
    
}

export const logoutController = async () => {
    
}

export const updateController = async () => {
    
}