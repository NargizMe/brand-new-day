const express = require("express");
const Parol = require("../module/parolModule");
const fs = require("fs");
const router = express.Router();

router.post("/add-parol", async (req, res) => {
  const { parol } = req.body; 
  fs.readFile("parol.txt", "utf8",function(err,data){
    if(err){
      return res.status(433).json({message:err});
    }
    let result=data.replace( data, parol);

    fs.writeFile("parol.txt",result,'utf8',function(err){
      if(err){
        return res.status(433).json({message:err});
      }
      res.status(200).json({message:'Parol changed succesfully'})
    })
  });
});

router.get("/look-parol", async (req, res) => {
  await fs.readFile("parol.txt", "utf8",function(err,data){
    if(err){
      return res.status(433).json("There is no any parol");
    }
    res.status(200).json({data});
  });
});

router.get("/take-parol", async (req, res) => {
  const takenParol = await Parol.find({});
  if (takenParol.length !== 0) {
    return res.status(200).json({ takenParol });
  }
  res.status(433).json("Firstly you have to create password");
});

module.exports = router;
