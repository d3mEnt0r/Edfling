import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import Connection from './database/db.js';
import Router from './routes/route.js';

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', Router);


const USERNAME = process.env.DB_Username;
const PASSWORD = process.env.DB_Password;

Connection(USERNAME, PASSWORD);

app.listen(5000, function(){
    console.log("Server is up and running on port 5000");
});

