import {Request,Response} from 'express'
import CategoryModel from '../models/Category'

export const createCategory = async(req:Request,res:Response) => {
    try {   
        const category = await CategoryModel.create(req.body)
        res.status(200).json(category)
    } catch(err: unknown) {
        if(err instanceof Error) {
            res.status(400).json({  
              message: err.message
            })
        }
    }
}

export const getAllCategory = async (req:Request,res:Response) => {
    try { 
        const categories = await CategoryModel.find()
        res.status(200).json(categories)
    } catch(err: unknown) {
        if(err instanceof Error) {
            res.status(404).json({message: 'cannnot get categories'})
        }
    }
}

export const updateCategory = async (req:Request, res:Response) => {
    
}