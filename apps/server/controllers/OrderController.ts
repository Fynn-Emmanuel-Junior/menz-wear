import OrderModel from '../models/Order'
import { Request,Response } from 'express'


export const placeOrder = async(req:Request,res:Response) => {
    try {
        const order = await OrderModel.create(req.body)
        res.status(200).json(order)
    } catch(err: unknown) {
        if(err instanceof Error) {
            res.status(400).json({message: err.message})
        }
    }
}

export const getAllOrders = async(req:Request,res:Response) => {
    try {
        const allOrders = await OrderModel.find()
        res.status(400).json(allOrders)
    } catch(err: unknown) {
        if(err instanceof Error) return res.status(400).json({message: err.message})
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

export const deleteOrder = async(req:Request, res:Response) => {
    try {
        
    } catch(err: unknown) {
        if(err instanceof Error) return res.status(400).json({message: err.message})
    }
}

export const recentOrders = async (req:Request,res:Response) => {
    try {
        const recentOrders = await OrderModel.find().sort({createdAt: -1}).limit(6).exec()
        res.status(200).json(recentOrders)
    }  catch(err: unknown) {
        if(err instanceof Error) return res.status(500).json({message: err.message})
    } 
}

export const searchOrder = async (req:Request,res:Response) => {
    try {
            const searchResult = await OrderModel.find({
                $or: [
                    {orderId : req.query.orderId},
                    {customerName: {$regex: req.query.customerName, $options: 'i'}}
                ]
            })

            res.status(200).json(searchResult)

    } catch(err: unknown) {
        if(err instanceof Error) return res.status(500).json({message: err.message})
    }
}