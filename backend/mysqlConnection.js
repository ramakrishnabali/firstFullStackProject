const mysql = require("mysql2")

var connection = mysql.createConnection({
    port:3306,
    host:"localhost",
    database:"tasks",
    user:"root",
    password:"R@ma535145"
})

connection.connect((err)=>{
    if (!err){
        console.log("connection with mysql is successful")
    }else{
        console.log(err)
    }
})

module.exports= connection