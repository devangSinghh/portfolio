const express = require('express');
const app = express();
const PORT = 1111;
const path = require("path");
const routes = require('./routes/api');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const Data = require('./model/projects');
//reading .env vars
dotenv.config();

//running react when server is starting
app.use(express.static("client/build"));
// app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

//connect to DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Db connected!"));

//Middlewares
app.use(express.json());
app.use(cors());
app.use('/api/dataItem', routes);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Add headers
// app.use(function (req, res, next) {
//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:1111');
//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   // Pass to next layer of middleware
//   next();
// });


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

app.get("/myprojects", (req, res) => {
  try{
    Data.find({}).then(data => console.log(data));

  }
  catch(err){
    res.status(400).send(err);
  }
  
})

app.listen(PORT, () => console.log(`server started at ${PORT}`));