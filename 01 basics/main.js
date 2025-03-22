const express = require("express");
const { chownSync } = require("fs");
const app = express();
const port = 3000;

//app.use is used to use middleware
//express.static is a built in middleware
app.use(express.static('public'))

// app.get or app.post or app.put or app.delete(path, handler)

//all these are end points
app.get("/", (req, res) => {
    res.send("Hello World by Abhishek Negi!");
});

app.get("/about", (req, res) => {
    res.send("About Us!");
});

app.get("/contact", (req, res) => {
    res.send("Conatct Me");
});

app.get("/blog", (req, res) => {
    res.send("Welcome to my blog!");
});

app.get("/blog/:slug", (req, res) => {
    //logic to fetch {slug} from the db
    console.log(req.params)
    console.log(req.query)
    res.send(`hello ${req.params.slug}`);
});
// app.get("/blog/:slug/:second", (req, res) => {
//     //logic to fetch {slug} from the db
//     res.send(`hello ${req.params.slug} and ${req.params.second}`);
// });
// app.get("/blog/intro-to-js", (req, res) => {
//     //logic to fetch into to js from from db
//   res.send("Welcome to intro-to-js!");
// });
// app.get("/blog/intro-to-python", (req, res) => {
//     //logic to fetch into to python from from db
//   res.send("Welcome to intro-to-python!");
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
