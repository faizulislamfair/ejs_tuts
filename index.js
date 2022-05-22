const express = require('express')
const app = express()
const PORT = 3000

app.use(express.urlencoded({extended: true}))

app.set("view engine", "ejs")


let pLanguages = []


app.get('/', (req, res)=>{
    res.render("index", {plNames: pLanguages});
})

app.post('/', (req, res)=>{
     const pLanguage = req.body.pLanguage;
     pLanguages.push(pLanguage);
     res.redirect('/');
})


app.listen(PORT, ()=>{
    console.log(`App is listening at http://localhost:${PORT}`);
})