import express from "express"
import cors from "cors"
import config from "./config"
import mongoose from "mongoose"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(config.port, ()=>{
  console.log(`server running`)
})


async function server () {

  try{
   await mongoose.connect(config.database_url!)

   console.log(`server running on port ${5000}`)
  }
  catch(error){
  console.error(`server error ${server}`)
  }

  console.log("port in on")

}

server();