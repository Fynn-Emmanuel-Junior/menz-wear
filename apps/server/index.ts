import express , {Express,Request, Response} from 'express';

const app: Express = express();

const PORT =  3500;

app.get('/',(req:Request,res:Response) => {
    res.send('hello from express')
})

app.get('/express',(req,res) => {
    res.json('hello from express')
})

app.get('/hello', (req,res) => {
    res.json('hello from express')
})

app.listen(PORT,() => console.log(`listening on port ${PORT}`))