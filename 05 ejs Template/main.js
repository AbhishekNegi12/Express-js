const express = require('express')
const app = express()
const port = 3000


//templates like ejs are used to put variables inside the template pretty much this is the work of templates
app.set('view engine', 'ejs');

//ejs is easy and will help in learning react

//various view engine
// app.set('view engine', 'pug');
// app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
//   res.send('Hello World!')
let siteName = "Adidas"

let arr =[1,54,65]

let searchText = "Search Now"
res.render("index",{siteName: siteName, searchText: searchText, arr})
})
app.get('/blog/slug', (req, res) => {
//   res.send('Hello World!')
let blogTitle = "Adidas why and when"
let blogContent = "Good Brand"
res.render("blogpost",{blogTitle: blogTitle, blogContent: blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})