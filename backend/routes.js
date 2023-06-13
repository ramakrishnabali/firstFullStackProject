const express = require("express")
const connection = require("./mysqlConnection")

const routes = express.Router()

const middleware = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  };


routes.get("/get",middleware, (req,res)=>{
        // console.log(body.title)
        // console.log(body.about)
        var query = "SELECT * FROM crud";
        connection.query(query,(err,result)=>{
                if (err){
                    res.status(400).json({err})
                }else{
                    res.status(200).json({success:result})
                }
        })
})


routes.post("/post" ,middleware, (req,res)=>{
    const {id,title,about} = req.body
    // console.log(description)
    // console.log(title)
    // console.log(id)
    var query = "INSERT INTO crud (id,title,about) VALUES(?,?,?)";
    connection.query(query,[id, title ,about],(err,result)=>{
        if (err) throw err;
        res.json({success:"Successfully inserted into table"})
    })
})

routes.get("/task/:id/",middleware, (req,res)=>{
    // console.log(body.title)
    // console.log(body.about)
    const {id} = req.params
    // console.log(req.params)
    var query = `SELECT * FROM crud WHERE id="${id}"`;
    connection.query(query,(err,result)=>{
            if (err){
                res.status(400).json({err})
            }else{
                res.status(200).json({success:result})
            }
    })
})


routes.put("/task/:id",middleware, (req,res)=>{
    // console.log(body.title)
    // console.log(body.about)
    const {id} = req.params
    const {title,about} = req.body
    // console.log(req.params)
    var query = `UPDATE crud SET title=?,about=? WHERE id="${id}"`;
    connection.query(query,[title,about],(err,result)=>{
            if (err){
                res.status(400).json({err})
            }else{
                res.status(200).json({success:result})
            }
    })
})


routes.delete("/task/:id",middleware, (req,res)=>{
    // console.log(body.title)
    // console.log(body.about)
    const {id} = req.params
    
    // console.log(req.params)
    var query = `DELETE FROM crud WHERE id="${id}"`;
    connection.query(query,(err,result)=>{
            if (err){
                res.status(400).json({err})
            }else{
                res.status(200).json({success:result})
            }
    })
})
module.exports = routes