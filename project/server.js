const mysql = require('mysql');
const express = require('express')
const session = require('express-session')
const path = require('path')
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}))
app.use(cors())
const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "Sample",
    multipleStatements: true
});

connection.connect((error) => {
    if(!error) {
        console.log("Connected");
    }
    else {
        console.log(error);
    }
})

app.post('/try', (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  if (email && password) {
    connection.query('SELECT * FROM Users Where Email = ? AND Password = ?',
      [email, password],
      (error, result) => {
        if (error) {
          res.send({ error: error });
        }
        if (result) {
          request.session.loggedin = true;
          request.session.email = email;
          return res.redirect('/');
        }
      })
  }
})

app.post('/register', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const country = req.body.country;
  if (email && password && country) {

    connection.query('SELECT * FROM Users Where Email = ? AND Password = ?',
      [email, password],
      (error, result) => {
        if (error)
          res.send({ error: error });
        if (!result) {
          connection.query("INSERT INTO Users (Email,Password,Country) VALUES (?,?,?)",
            [email, password, country],
            (error, result) => {
              if (error)
                console.log(error);
              else {
                req.session.loggedin = true;
                req.session.email = email;
                res.redirect('/')
              }
            })
        }
      })
  }
})

app.post('/create_account', (req,res) => {
    connection.query("INSERT INTO Accounts () VALUES ()")
})

app.post('/delete_request', (req,res) => {
    connection.query()
})

app.post('/create_request', (req,res) => {
    connection.query("INSERT INTO Requests () VALUES ()")
})

app.post('/transaction', (req,res) => {

})

app.listen('3001')
