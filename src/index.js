const express = require("express");
const app = express();
const port = 4000;
const path = require("path");


app.set(parse.json());
app.set("view engine", "ejs");
app.set('src/views', path.join(__dirname, 'src/views'));


app.get('/', (req, res) => {
    res.render('index');
});

const PORT = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Your server is running at http://localhost:${port}`)
})