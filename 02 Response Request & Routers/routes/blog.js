const express = require("express");
const router = express.Router();

// respond with "hello world" when a GET request is made to the homepage
router.get("/", (req, res) => {
    res.send("Blogs Home Page");
});
// GET method about route
router.get("/about", (req, res) => {
    res.send("About Blogs");
});

router.get("/blogpost/:slug", (req, res) => {
    res.send(`Fetch the blog post for ${req.params.slug}`);
});



module.exports = router;