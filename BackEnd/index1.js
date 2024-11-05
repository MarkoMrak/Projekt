// Kreirati vlastite get,post,put,delete metode za rad s objektom unutar vlastitiog projekta

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/getknjige', (request, response) => {
    return response.send('Popis knjiga');
    });

app.post('/addknjiga', (request, response) => {
      //naslov, autor, god_izdanja, izdavac
      const data = request.body;
      const naslov = data.naslov;
      const autor = data.autor;
      const god_izdanja = data.god_izdanja;
      const izdavac = data.izdavac;

    return response.send("Dodavanje knjiga: " +naslov+" "+autor+" "+god_izdanja+" "+izdavac+" ");
    });

app.put('/updateknjige', (request, response) => {
    return response.send('Azuriranje knjiga');
    });

app.delete('/deleteknjige', (request, response) => {
    return response.send('Brisanje knjiga');
    });
    
app.listen(3000, () => {
    console.log("Server running on port 3000");
    });