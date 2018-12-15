const fs = require('fs');
var express = require('express')
var cors = require('cors')
var app = express()
var port = 3000
var path    = require("path");
var data_name = 'tendermint_data.json'

app.get('/dashboard', function (req, res) {
    res.sendFile(path.join(__dirname+'/dashboard.html'));
});
    

//  Send json, use cors 
app.get('/send_json', cors(), function (req, res) {
    res.sendFile(path.join(__dirname+'/'+data_name));
});

// Redirect
app.get('/', async function (req, res) {
    res.redirect('/dashboard');
});

// Remove tendermint json cache
app.get('/clean-cache', function(req, res) {
    fs.unlink(data_name, (err) => {
        if (err) throw err;
            console.log(`${data_name} was removed`);
    });
    res.send(`<h2>${data_name} was removed</h2>`)
})


app.listen(port, () => console.log(`Listening on port ${port}!`))