import { ACCESS_TOKEN_SECRET } from './../index';
import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import UserModel from '../models/User'

export const UserAuthMiddleware = asyncHandler(async(req,res,next) => {
    let token ;
    token = req.cookies.jwt

    if(token) {
        try {
            const decoded = jwt.verify(token,ACCESS_TOKEN_SECRET)

            req.user = await UserModel.findById(decoded.userId)

            next()
        } catch(err) {
            res.status(401).json('invalid token')
        }
    } else {
        res.status(403).json('No token found')
    }     
})