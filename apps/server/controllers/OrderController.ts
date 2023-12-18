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

export const getOrder = async(req:Request,res:Response) => {
    try {
        const order = await OrderModel.findById(req.params.id)
        if(order) {
            res.status(200).json(order)
        } else {
            res.status(404).json('No order found')
        }
        
    } catch(err: unknown) {
        if(err instanceof Error) return res.status(400).json({message: err.message})
    }
}