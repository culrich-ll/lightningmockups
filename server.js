var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var port = process.env.PORT || 3000;

router.use(function (req,res,next) {
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/admin",function(req,res){
  res.sendFile(path + "administration.html");
});

router.get("/addresscheck",function(req,res){
  res.sendFile(path + "addresscheck.html");
});

app.use(express.static(path));

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(port,function(){
  console.log("Live at Port "+port);
});