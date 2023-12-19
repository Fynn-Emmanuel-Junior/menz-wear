import { Request,Response } from "express";
import ProductModel from "../models/Product";

export const AddProduct = async (req:Request,res:Response) => {
    try {
        const newproduct = await ProductModel.create(req.body)
        res.status(200).json(newproduct)
    } catch(err: unknown) {
        if(err instanceof Error) {
            res.status(400).json({
                status: false,
                message: `error creating product: ${err.message}`
            })
        }
    }
}

export const updateProduct = async (req:Request, res:Response) => {
    const product = await ProductModel.findById(req.params.id)

    if(product) {
        const newproduct = await ProductModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        
        res.status(200).json({
            status: false,
            message: 'product updated',
            newproduct
        })
    } else {
        res.status(404).json('no product found')
    }
}

export const getAllProducts = async (req:Request,res:Response) => {
    try {
        const products = await  ProductModel.find()
        res.status(200).json(products)
    } catch(err: unknown) {
        if(err instanceof Error) {
            res.status(404).json({
            status: false,
            message: err.message 
            })
        }
    }
}

export const getProduct = async (req:Request,res:Response) => {
    try {
        const product = await ProductModel.findById(req.params.id)
        res.status(200).json(product)
    } catch(err: unknown) {
        if(err instanceof Error) {
            res.status(404).json({
                status: false,
                message: err.message
            })
        }
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    const product = await ProductModel.findById(req.params.id)

    if(!product) return res.status(404).json('no porduct found')

    try {
        await ProductModel.deleteOne({_id: product._id})
        res.status(200).json('product deleted')
    } catch(err: unknown) {
        if(err instanceof Error) {
            res.status(400).json({
                status: false,
                message: err.message
            })
        }
    }
}

export const searchProduct = async (req:Request,res:Response) => {
    try {
        const product = await ProductModel.find({
            name: {$regex: req.query.name,$options: 'i'}
        })

        res.status(200).json(product)
    } catch(err: unknown) {
        if(err instanceof Error) return res.status(400).json({message: err.message})
    }
}