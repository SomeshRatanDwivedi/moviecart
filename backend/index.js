const express=require('express');
const bodyParser=require('body-parser');
const CORS=require('cors')


const app=express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

app.use(CORS({
    origin:'*',
    credentials:true,
    optionsSuccessStatus:200
}))


app.use('/api/v1', require('./routers/index'))



















app.listen(8000, ()=>{
    console.log("app is listening on port:8000")
})