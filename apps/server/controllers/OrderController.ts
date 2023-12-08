import OrderModel from '../models/Order'
import { Request,Response } from 'express'


export const addOrder = async(req:Request,res:Response) => {
    try {
        const order = await OrderModel.create(req.body)
        res.status(200).json(order)
    } catch(err: unknown) {
        if(err instanceof Error) {
            res.status(400).json({message: err.message})
        }
    }
}