/*import http from "http"
import { percentLove } from "./features.js";
import fs from "fs"//with the help of fs we can read any file
import path from "path"

console.log(path.extname("/home.random/index.html"));//extension name bata deta hai jaise .html , .js

// const home = fs.readFileSync("./index.html", ()=>{
//       console.log("File read successfully");
// })

// console.log(home);

//console.log(percentLove());

// console.log(myObj);

//console.log(http);
// console.log(myObj.gName);

const home = fs.readFileSync("./index.html");//Synchronously jab tak yeh file na ho read tab tak aage na badho

console.log(home);

const server = http.createServer((req, res) => {
      //console.log(req.url);
      //res.end("Noice"); -> ab unlimited reload nahi hoga

      //res.end("<h1>Hello Hi Shashriyakal</h1>")

      if(req.url === "/about")
      {
            res.end(`<h1>Love is ${~~(Math.random()*100)}%</h1>`);
      }
      if(req.url === "/contact")
      {
            res.end("<h1>You can feel free to contact us</h1>");
      }
      if(req.url === "/")
      {
            // fs.readFile("./index.html", (err, home)=>{
            //       res.end(home);
            res.end(home);
      }
      else
      {
            res.end("<h1>Page not found</h1>");
      }
})

server.listen(5000, () => {
      console.log("Server is working");
})*/

//Use of express Now

import express from "express";
import fs from "fs";
import path from "path";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017", {
      dbName: "backend",
})
.then(() => console.log("Database Connected Successfully"))
.catch((err) => console.log(err));

const messageSchema = new mongoose.Schema({
      name: String,
      email: String,
});

const Message = mongoose.model("Message", messageSchema);

const app = express();

const users = [];

app.use(express.static(path.join(path.resolve(), "public")));
//using middlewares 
app.use(express.urlencoded({ extended: true }));

//setting up view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
      //res.send("Hi")
      //res.statusCode = 404;
      //res.sendStatus(404);
      // res.json({
      //       success: true,
      //       products: []
      // })

      // res.status(400).send("Meri marzi");
      
      //to find current directory
      //console.log(path.resolve());

      //const pathlocation = path.resolve();
      //console.log(path.join(pathlocation, "./index.html"));
      //res.sendFile(path.join(pathlocation, "./index.html"));
      // res.sendFile("./index.html");

      //res.render("index", {name: "Ashmit"});

      //res.sendFile("index.html");
      res.render("index", {name: "Ashmit"});
});

app.get("/add", async(req, res) => {
      await Message.create({name: "James", email: "james34@gmail.com"})
      res.send("<h1>Nice</h1>");
});

app.get("/success", (req, res) => {
      res.render("success");
})

app.post("/", (req, res) => {
      console.log(req.body);

      //further database ke actions kar sakte hai

      users.push({username: req.body.name, email: req.body.email});

      //res.redirect
      //res.render("success");

      res.redirect("./success");
})

app.get("/users", (req, res) => {
      res.json({
            users,
      })
})

app.listen(5000, () => {
      console.log("Server is live now");
});

