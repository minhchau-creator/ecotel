const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost:27017/students')

const StudentSchema = mongoose.Schema({
    name:String, 
    age: Number
})

const StudentModel = mongoose.model("students", StudentSchema)

app.get("/getStudent", (req, res) =>{
    StudentModel.find({}).then(function(students) {
        res.json(students)
    }).catch(function(err){
        console.log(err)
    })
})

app.listen(3001, ()=>{
    console.log("Server is running")
})
