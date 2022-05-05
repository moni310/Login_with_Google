const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const Token = require("./routes/Tokenroutes")
const app = express();
var cors = require('cors');
app.use(cors());
app.use(express.json())

app.use(express.static("./frontend"))


mongoose
  .connect(
    `mongodb+srv://moni07:moni07@firstproject.jvubt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
     
    }
  )
  .then(() => console.log("mongodb connected..."))
  .catch((err) => console.log(err));

// app.use("/",router)
app.use("/mm",Token)


port =4000

app.listen(port, () => {
  console.log("Server started on ",`${port}`)
});




