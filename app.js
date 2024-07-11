const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))

app.get('/', (req, res) => {
  //res.send('Hello World!')
    res.sendFile(__dirname + '/home.html')
})
app.get('/home', (req, res) => {
    //res.send('Welcome to My home page')
    res.sendFile(__dirname + '/home.html')
  })
app.get('/about', (req, res) => {
  //res.send('I am AIML Student 🧑‍🎓')
  res.sendFile(__dirname + '/about.html')
})
app.get('/contact', (req, res) => {
    /*var a = 10;
    var b = 20;
    var c = a+b;
    res.send(`A value is ${a} <br/> B value is ${b}`)
    res.send("The sum is: "+ c)*/
    res.sendFile(__dirname + '/contact.html')
  })
app.get('/edit/:id',(req,res) => {
    var id = req.params.id;
    res.send("ID IS" + id);
})
app.get('/search',(req,res) => {
    var q = req.query.q
    res.send('Search is '+q);
})

app.get('/marks', (req, res) => {
    res.sendFile(__dirname + '/marks.html')
  })
app.get('/process' ,(req,res) => {
    var no1 = req.query.txt1;
    var no2 = req.query.txt2;
    var no3 = req.query.txt3;
    var no4 = req.query.txt4;
    var c = parseInt(no1) + parseInt(no2) + parseInt(no3) + parseInt(no4);
    var avg = c/4;
    var msg = `<table border = '1'>
        <thead>
        <tr>
        <th>Subject</th>
        <th>Marks</th>
        </tr>
        <tr>
            <td>Machine Learning</td>
            <td>${no1}</td>
        </tr>
        <tr>
            <td>FSWD</td>
            <td>${no2}</td>
        </tr>
        <tr>
            <td>Mobile Application</td>
            <td>${no3}</td>
        </tr>
        <tr>
            <td>Data Science</td>
            <td>${no4}</td>
        </tr>
        <tr>
            <td><b>SUM</b></td>
            <td>${c}</td>
        </tr>
        <tr>
            <td><b>Data Science</td>
            <td>${avg}</td>
        </tr>
    </table>`
    res.send(msg);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})