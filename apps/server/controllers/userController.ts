import UserModel from '../models/User'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { Response,Request } from 'express'
import { userSignupValidation,userLoginValidation } from '../validations/UserValidations'
import {ACCESS_TOKEN_SECRET} from '../index'

const registerController = async (req:Request,res:Response) => {
    const {error} = userSignupValidation(req.body)
    if(error) res.status(400).json({message: `error in signing up user: ${error.message}`})

    const {username,email,password} = req.body

    const checkIfEmailExists = await UserModel.findOne({email})
    if(checkIfEmailExists) return res.status(400).json('User already exists')

    const salt = await bcrypt.genSalt(10)

    const hashedpassword = await bcrypt.hash(req.body.password,salt)

    try {
        const  user = await UserModel.create({
            username: req.body.username,
            email: req.body.email,
            password: hashedpassword
        })

        res.status(200)
            .json(user)
            .json({message: 'user login successful'})

    } catch (err: unknown) {
        if(err instanceof Error) return res.status(400).json({message: `error in creating user: ${err.message}`})
    }
}


const loginController = async (req:Request,res:Response) => {

    const {email,password} = req.body

    const {error} = userLoginValidation(req.body)
    if(error) return res.status(400).json({message: `couldnt validate user ${error.message}`})

    if(!req.body.email) return res.status(404).json({message: `No user found `})

    const user:any  = await UserModel.findOne({email})

    const match = await bcrypt.compare(password, user.password || '')

    if(match) {
        const accesstoken = jwt.sign(
            {"userId": user._id},
            ACCESS_TOKEN_SECRET
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

        res.status(200).json({
            _id: user._id,
            username: user.username,
            email: user.email
        })

    } else {
        res.status(401).json('Unauthorized user')
    }
}

const logoutController = async (req:Request,res:Response) => {
    try {
        res.clearCookie('jwt')
        res.status(401).json({message: 'user has been logout'})
    } catch(err) {
        res.status(400).json({message: 'error in logging out user'})
    }
}

interface User {
    _id: string,
    username: string,
    email: string,
    password: string
}

declare global {
    namespace Express {
      interface Request {
        user: User | '';
        updateUser: User | ''
      }
    }
  }

const updateController = async (req:Request,res:Response) => {
    try {
        const user = req.user
        if(req.body.password) {
            const salt = await bcrypt.genSalt(10)
            req.body.password  = await bcrypt.hash(req.body.password,salt)
        }

        const updateUser = await UserModel.findByIdAndUpdate(user._id,{
            $set: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            } 
        }, {new: true})

        const {password , ...rest} = updateUser
        res.status(200).json(rest)
    } catch(err) {
        res.status(400).json('error in updating user')
    }
} 

const resetPasswordController = async(req:Request,res:Response) => {
    try {
        const {email,newpassword} = req.body

        const user = await UserModel.findOne({email})
    
        if(!user) return res.status(404).json({message: 'no user found'})
        
        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(newpassword,salt)

        user.password = hashedpassword
        await user.save()

        return res.status(200).json({message: 'password reset succesful'})
    
    } catch(err) {
        res.status(400).json('password reset unsuccessful')
    }  
}

export {
    registerController,
    loginController,
    logoutController,
    updateController,
    resetPasswordController
}