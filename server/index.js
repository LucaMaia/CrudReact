const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require('cors');

const db = mysql.createPool({
    host: "localhost",
    user: "Luca",
    password: "Aruanda22",
    database: "crudgames",
})

app.use(cors())
app.use(express.json())

app.post('/register', (req,res)=>{
    const {name} = req.body
    const {cost} = req.body
    const {category} = req.body

    let SQL = 'INSERT INTO games(name,cost,category) VALUES(?,?,?)';

    db.query(SQL,[name,cost,category],(err,result)=>{
        console.log(err);
    })
    // console.log(name , cost , category);
})


app.get('/getCards', (req,res)=> {
    let SQL = 'SELECT * FROM games';

    db.query(SQL, (err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    })
})


// app.get("/", (req,res) => {

//     let SQL = "INSERT INTO games (name,cost,category) VALUES ('Far Cry 5', '120', 'Ação')";

//     db.query(SQL, (err, result)=>{
//         console.log(err)
//     })
// })

app.listen(4001, () => { 
    console.log("rodando servidor");
});