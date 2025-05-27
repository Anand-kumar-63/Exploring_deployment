const express = require("express");
const app = express();
const port = 4000;
const path = require("path");

app.set("view engine", "ejs");
// app.set('src', path.join(__dirname, 'src'));


app.get('/', (req, res) => {
    res.render('index', { message: 'Hello World' });
});

const PORT = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Your server is running at http://localhost:${port}`)
})