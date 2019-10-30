const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
require('dotenv').config();
require('./server/lib/global-vars');

const db = require('./server/db')
const heroesRouter = require('./server/routes/heroes-router')

const app = express()
const apiPort = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


// app.get('/', (req, res) => {
//     res.send('Hello Worlds!');
// })


app.use('/api', heroesRouter)



// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


// start server on the specified port, binding host
app.listen(apiPort, function () {
    console.log("server starting on " + apiPort);
});