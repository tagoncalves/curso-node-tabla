const express = require('express');
const app = express();
const port = 8080

//Servir contenido estatico // prioriza el middleware
app.use(express.static('public'));

//Home Page // no se utiliza.
// app.get('/', (req, res) => {
//   res.sendFile('./public/hola-mundo');
// })
/*----------------------------------------*/

//Hello World in public
app.get('/hola-mundo', (req, res) => {
  res.sendFile(__dirname + 'public/hola-mundo/index.html');
})
//Page doesnt exist
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
