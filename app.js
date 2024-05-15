const express=require("express");
const app=express();
const dotenv=require("dotenv");
dotenv.config({path:".env"});
const errormiddleware=require("./backend/middleware/error")
const cookieParser =require("cookie-parser");
const bodyParser=require("body-parser")
const cors=require("cors")
  const allowedOrigins = ['http://localhost:3000','https://royal-webtech-mmdm.vercel.app/','https://royal-webtech-mmdm.vercel.app']; // setting list of origin that can request to this server
  app.use(cors({
    origin: allowedOrigins,
    credentials: true,
  }));
app.use(bodyParser.urlencoded({ extended: true }));//Handling binary Data in server
app.use(express.json());//handling the json Data on Server
app.use(cookieParser());// handling the cookie
app.get('/',(req,res,next)=>{
  res.send("<h1> Wow Royal Webtech is Growing<h1/>")
})
app.use("/api/v1/",require("./backend/Route/userRoute"));// directing route to user Route
app.use("/api/v1/",require("./backend/Route/Astrologer"));// directing  route to surveyRoute
//middleware for the Error
app.use(errormiddleware);
module.exports=app;

