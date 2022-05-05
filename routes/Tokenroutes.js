const express =require("express")
const app =  express.Router()
const {signup} = require("../Controller/UserRoutes")
const {signin} =require("../Controller/UserRoutes")
const auth = require("../middleware/auth")

// to singup

app.post("/singup",signup)
app.post("/signin",signin)

module.exports=app