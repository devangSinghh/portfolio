const express = require('express');
const app = express();
const PORT = 1111;
const path = require("path");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const Data = require('./model/projects');
//reading .env vars
dotenv.config();

//connect to DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Db connected!"));

//Middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client/build')));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get('/', (req, res) => {
  Data.find({}).then(data => res.json(data));
})
app.get("/myp", (req, res) => {
    Data.find({}).then(data => res.json(data));
})
app.get("/np",(req,res)=>{
  res.send("received")
})

app.post('/myprojects', async(req, res) => {
  const project = new Data({
    projectHeading:req.body.projectHeading,
    projectDescription:req.body.projectDescription,
    img:req.body.img,
    projectLink:req.body.projectLink
});
try{
    const savedProject = await project.save();
    res.send(savedProject);
}catch(err) {
    res.status(400).send(err);
}
})



app.listen(PORT, () => console.log(`server started at ${PORT}`));
