import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors'
import morgan from 'morgan';
import dotenv from 'dotenv'
dotenv.config()
import authRouter from './routes/index'
import webhookRouter from './webhooks/index'
import oderCancelContoller from './oderCancel/index'



import connectDb from './db';
connectDb();
// import { config } from "./utils/config/index";
// const { port } = config;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client', 'build')));
app.use(authRouter)


app.use('/webhook',webhookRouter)
app.use('/oderCancelContoller',oderCancelContoller);



app.use('/static', express.static(path.join(__dirname, '../client', 'build', 'static')));
app.get("/server", (req, res) => {
  res.sendFile(__dirname + '/javascript/script.js');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'))
  // console.log("code is running");
});

const appPort = process.env.PORT || 3000;
app.listen(appPort, () => {
  console.log(`server is running on http://localhost:${appPort}`);
});


