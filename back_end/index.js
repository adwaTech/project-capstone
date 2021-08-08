<<<<<<< HEAD
const  express =require('express');
const mongoose =require('mongoose');
const cors =require('cors');
const router=require('./Routes/index')
const app=express();

const path = require("path");

const expressSession = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");



require("dotenv").config();

const port = process.env.PORT || "5000";

app.use(cors());
app.use(express.json())
app.use('',router);
app.use(express.static("uploads"));



const session = {
    secret: process.env.SESSION_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: false
};
if (app.get("env") === "production") {
    // Serve secure cookies, requires HTTPS
    session.cookie.secure = true;
}

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.use(expressSession(session));


const strategy = new Auth0Strategy(
    {
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      callbackURL: process.env.AUTH0_CALLBACK_URL
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      /**
       * Access tokens are used to authorize users to an API
       * (resource server)
       * accessToken is the token to call the Auth0 API
       * or a secured third-party API
       * extraParams.id_token has the JSON Web Token
       * profile has all the information from the user
       */
      return done(null, profile);
    }
  );



mongoose.connect("mongodb://localhost:27017/cc",{useUnifiedTopology: true,useNewUrlParser: true})
    .then(res=>{
        console.log("our database is running on port 27017");
    })
    .catch(error=>console.log(error));

app.listen(port,()=>console.log("our server is running on port 5000"));
=======
const express =require( 'express');
const mongoose =require( 'mongoose');
const cors =require( 'cors');

const PORT=6000;

const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/capston-project',{ useNewUrlParser: true,useUnifiedTopology: true  }).then(res=>{
    console.log('our database is running on port 27017')
})

app.listen(PORT,console.log('server is running on port 6000'))


>>>>>>> main
