const express = require("express");
const blog = require('./routes/blog')
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use('/blog',blog);

//get request is checked from the browser
// app.get("/", (req, res) => {
//   //console.log will appear in server side as a message
//   console.log("Hey its a get Request");

//   //res.send will appear on the frontend as we see
//   res.send("Hello World from Abhishek bye!");
// });
// // we dont use get request because it has a character limit
// //8192 bytes

// app.post("/", (req, res) => {
//   console.log("Hey its a POST Request");
//   res.send("Hello World POST!");
// });

// //put request is used to made update
// app.put("/", (req, res) => {
//   console.log("Hey its a PUT Request");
//   res.send("Hello World PUT!");
// });


//chaining
app.get("/", (req, res) => {
  //console.log will appear in server side as a message
  console.log("Hey its a get Request");

  //res.send will appear on the frontend as we see
  res.send("Hello World from Abhishek bye!");
}).post("/", (req, res) => {
  console.log("Hey its a POST Request");
  res.send("Hello World POST!");
}).put("/", (req, res) => {
  console.log("Hey its a PUT Request");
  res.send("Hello World PUT!");
});


//this will give error because we need absolute path
//if defining root it will be sorted
app.get("/index",(req, res) => {
  console.log("Hey its a index");
  res.sendFile("templates/index.html",{root:__dirname});
});


app.get("/api",(req, res) => {
  res.json({a:1,b:2,c:3})
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
