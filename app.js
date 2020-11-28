const express = require('express');
const app = express();
const PORT = 1111;
const routes = require('./routes/api');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

//connect to DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Db connected!"));

//Middlewares
app.use(express.json());
app.use(cors());
app.use('/api/dataItem', routes);



app.listen(PORT, () => console.log(`server started at ${PORT}`));