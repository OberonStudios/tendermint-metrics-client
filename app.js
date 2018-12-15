const fs = require('fs');
var express = require('express')
var cors = require('cors')
var app = express()
var port = 3000
var path    = require("path");
var json_file = 'tendermint_data.json'

// Routes
// Dasboard & redirect to dashboard
app.get('/dashboard', function (req, res) {
    res.sendFile(path.join(__dirname+'/dashboard.html'));
});

app.get('/', async function (req, res) {
    res.redirect('/dashboard');
});

//  Send json, use cors 
app.get('/send_json', cors(), function (req, res) {
    res.sendFile(path.join(__dirname+'/'+json_file));
});

//  Send bulma css && custom css
app.get('/css/bulma', function (req, res) {
    res.sendFile(path.join(__dirname+'/node_modules/bulma/css/bulma.min.css'));
});

app.get('/css/custom', function (req, res) {
    res.sendFile(path.join(__dirname+'/css/custom.css'));
});

// Remove tendermint json cache
app.get('/clean_cache', function(req, res) {
    fs.unlink(data_name, (err) => {
        if (err) throw err;
            console.log(`${data_name} was removed`);
    });
    res.redirect('/')
});

app.listen(port, () => console.log(`Listening on port ${port}!`));