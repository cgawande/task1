const express=require("express")
const bodyParser=require("body-parser")
const app=express()

require("./config/config")
require("./model/relationShips")
const userRoute=require("./routes/userRoutes")
const productRoute=require("./routes/productRoutes")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use("/user",userRoute)
app.use("/product",productRoute)

app.listen(8000,()=>{
    console.log("server is running on 8000")
})