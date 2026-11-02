const fs=require("fs")

function tridibsFile(cb){
  fs.readFile("test.txt","utf-8",(err,data)=>{
    cb(data)
  })
}

function onDone(data){
  console.log(data)
}

tridibsFile(onDone)
console.log("HELLO")