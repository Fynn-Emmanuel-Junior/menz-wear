import express, {Response,Request} from 'express';
const dotenv = require('dotenv').config()

const app = express();

const PORT =  process.env.PORT || 4000 
 
app.use('/', (req:Request, res:Response) => {  
    res.send('Welcome')
})

app.get('/', (req:Request,res:Response) :void => {
    res.json({messae: 'like the video'})
})

app.listen((PORT), () :void => {
    console.log(`listening to server on ${PORT}`);
})