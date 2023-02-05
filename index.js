const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const authRoutes = require('./routes/auth')
const productRoutes = require('./routes/product')
const app = express()

require('dotenv').config();
app.use(express.json());

(async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Connection to Database successful")
      } catch (error) {
        console.log(error);
      }
  })();

app.use("/api/users/", userRoutes)
app.use("/api/auth/", authRoutes)
app.use("/api/products/", productRoutes)


app.get("/",(req,res)=>{
    res.send("WELCOME to the page")
})
app.listen(process.env.PORT || 3000 ,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})


