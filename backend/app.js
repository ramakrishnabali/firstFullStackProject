const http = require('http')
const express = require("express")
const cors = require("cors")
const connection = require("./mysqlConnection")
const router = require("./routes")


const app = express()
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const server = http.createServer(app)

server.listen(3001,(err)=>{
    if (!err){
        console.log("connection is established")
    }else{
        console.log(`error occured ${err}`)
    }
})

app.use(router)

