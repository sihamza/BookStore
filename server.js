var app = require('express')();
var cors = require('cors');
const request = require("request-promise");

function getData(url) {
  return request(url).then(( response )=> {
    return JSON.parse(response) ;
  }).catch(function (err) {
        console.log(err);
    }) ;
}

app.use(cors());

app.get('/api/', async (req,res)=> {
  var response = await getData('https://www.googleapis.com/books/v1/volumes?q=' + req.query.q ) ;
  console.log(response);
  res.send(response) ;
});
app.get('/api/:id',  async (req,res)=> {
  var response = await getData('https://www.googleapis.com/books/v1/volumes/' + req.params.id ) ;
  res.send(response) ;
});
app.listen(3000);
