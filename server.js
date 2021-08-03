const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

// Express HBS view engine
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));
 
/*app.get('/', function (req, res) {
  //res.send('Hello World');

  
  let salida = {
      nombre: 'juan',
      edad: 23,
      url: req.url
  }
  res.send(salida);
});*/

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/',(req,res)=>{
  res.render('home',{
    nombre: 'Vero arMAs'
  });
});

app.get('/about', (req,res)=>{
  res.render('about');
});

app.listen(port, ()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`);
});