import {Request,Response} from 'express'
import CategoryModel from '../models/Category'
import ProductModel from '../models/Product'

export const AddCategory = async(req:Request,res:Response) => {
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
    try {
            const category = await CategoryModel.findById(req.params.id)

            if(category) {
                const updatecategory = await CategoryModel.findByIdAndUpdate(
                    req.params.id,
                    req.body,
                    {new: true}
                )

                res.status(200).json(updatecategory)
            } else {
                res.status(404).json('Category not found')
            }

    } catch (err: unknown) {
        if(err instanceof Error) {
            res.status(400).json({message: err.message})
        }
    }
}


export const deleteCategory = async (req:Request,res:Response) => {
    try {
        await CategoryModel.deleteOne({category: req.params.id})
        await ProductModel.findOneAndDelete({ category: req.params.id })

        res.status(200).json('category deleted')
    } catch(err : unknown) {
        if(err instanceof Error) {
            res.status(400).json({message: err.message})
        }
    }
} 

export const searchCategory = async(req:Request, res: Response) => {
    
}
