import { AdminSignupValidation,AdminLoginValidation } from './../validations/AdminValidations';
import AdminModel from '../models/Admin'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { Request,Response } from 'express';
import { ADMIN_TOKEN_SECRET } from '../index';


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

export const loginController = async (req:Request,res:Response) => {
    const {error} = AdminLoginValidation(req.body)
    if(error) return res.status(400).json({message: error.message})

    const {email,password} = req.body

    const admin:any = await AdminModel.findOne({email})

    const matchpassword = await bcrypt.compare(password, admin.password || '')

    if(matchpassword) {
        try {
            const accesstoken = jwt.sign(
                {"adminId": admin._id},
                ADMIN_TOKEN_SECRET
            )

            res.cookie( 
                'jwt',
                accesstoken, 
                {
                    httpOnly: true,
                    sameSite: 'none',
                    secure: true
                }
            )

            res.status(200).json('login successful')
        } catch(err: unknown) {
            if(err instanceof Error) return res.status(400).json({message: err.message})
        }
    } else {
        res.status(401).json('No admin found')
    }
    
}

export const logoutController = async (req:Request,res:Response) => {
    try {
        res.clearCookie('jwt')
        res.status(200).json('admin logout')
    } catch(err: unknown) {
        if(err instanceof Error) return res.status(400).json({message: err.message})
    }
}

export const updateController = async (req:Request,res:Response) => {
    try {

        const admin = req.user
        if(req.body.password) {
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.passowrd,salt)
        }

        const updatedAdmin = await AdminModel.findByIdAndUpdate(admin._id,{
            $set: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }
        }, {new: true})

        res.status(200).json('Admin updated successfully')
    } catch(err: unknown) {
        if(err instanceof Error) return res.status(400).json({message: err.message})
    }
}