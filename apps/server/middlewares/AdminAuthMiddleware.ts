import  asyncHandler  from 'express-async-handler';
import jwt from 'jsonwebtoken'
import AdminModel from '../models/Admin'
import { ADMIN_TOKEN_SECRET } from '../index';


export const AdminAuthMiddleware = asyncHandler(async(req,res,next) => {
    let token ;

    token = req.cookies.jwt

    if(token) {
        try {
            const decoded = jwt.verify(token,ADMIN_TOKEN_SECRET)
            req.user = await AdminModel.findById(decoded.adminId)

            next()
        } catch(err) {
            res.status(401).json('Invalid token')
        }
    } else {
        res.status(403).json('No token found')
    }
})