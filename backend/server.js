// add type=module in package.json
//converting data into JSON, it takes JSON data that is sent to your server, parses it, and makes it available for you to work with in your Express.js route handlers as a JavaScript object.

import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'

//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())     //usinf this we can access backend from fronntend

//db connection
connectDB()

//api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))


app.get('/', (req, res)=>{
        res.send("API Working")
      
})

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`)
})

//npm run server

//mongodb+srv://<username>:<password>@chatapp.jn9av51.mongodb.net/