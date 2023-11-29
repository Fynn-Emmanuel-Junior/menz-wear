import express,{Request,Response} from 'express'

const app = express()

const PORT = 3500;

app.get('/',(req:Request,res:Response) => {
    res.json('welcome to express and node js crash course')
})

app.get('/hi', (req:Request,res:Response) => {
    res.send('hi hello')   
    console.log('we good')
})


app.listen(PORT, () => console.log(`server running on port ${PORT}`))