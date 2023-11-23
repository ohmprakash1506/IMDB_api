import express from 'express';
import router from './routes/router.js';
import 'dotenv/config'

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.listen(port, () =>{
    console.log(`Hello the app is running in port : ${port} `)
})

app.use('/v1',router)