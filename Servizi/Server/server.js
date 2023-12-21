const express = require('express');
const path = require('path');
const http = require('http');
const app= express();
var cors = require('cors'); //HTTP access control (CORS) for cross origin requests
app.use(cors()); //Setup cors
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api response

app.get('/api', (req, res) => {
    var jsonData = {
        "Auto Sportive":[
           {
              "nome":"Porsche 911",
              "velocitaMassima":"330 km/h",
              "accelerazione":"3,4 secondi(0-100)",
              "postiEporte":"4 posti e 2 porte",
              "descrizione":"La Porsche 911 è un'icona nel mondo delle auto sportive, famosa per la sua performance eccezionale, il design iconico e la guida coinvolgente. È sinonimo di potenza, agilità e tecnologia avanzata, offrendo un'esperienza di guida entusiasmante sia su strada che in pista. Ogni nuova versione della 911 porta miglioramenti tecnici e prestazionali mantenendo sempre il fascino distintivo della serie.",
              "prezzo":200,
              "immagine":"https://images.wallpaperscraft.com/image/single/porsche_911_turbo_103236_800x600.jpg"
           },
           {
              "nome":"Chevrolet Corvette Z06",
              "velocitaMassima":"300 km/h",
              "accelerazione":"3,5 secondi (0-100)",
              "postiEporte":"2 posti e 2 porte",
              "descrizione":"La Chevrolet Corvette Z06 è un'icona americana delle auto sportive, nota per il suo design aggressivo, le prestazioni sbalorditive e il rapporto qualità-prezzo competitivo. Offre un motore potente posizionato anteriormente, una guida coinvolgente e un mix di comfort e tecnologia, rendendola una valida concorrente nel mondo delle auto sportive di fascia alta.",
              "prezzo":80,
              "immagine":"https://cdn.auto.it/img/960/540/2021/10/04/160805753-7065077b-5cd3-4ea9-97cc-63beb905784b.jpg"
           },
           {
              "nome":"BMW M4 COUPÉ",
              "velocitaMassima":"250 km/h",
              "accelerazione":"3,6 secondi (0-100)",
              "postiEporte":"4 posti, 2 porte",
              "descrizione":"La BMW M4 COUPÉ è una sportiva ad alte prestazioni che offre un mix di lusso, agilità e potenza. Dotata di un motore potente e di una tecnologia all'avanguardia, offre un'esperienza di guida emozionante e dinamica. Con interni di alta qualità e una gamma di opzioni personalizzabili, la M4 COUPÉ rappresenta il connubio perfetto tra prestazioni sportive e comfort di guida quotidiana.",
              "prezzo":108,
              "immagine":"https://cdn.drivek.com/configurator-imgs/cars/it/800/BMW/M4-COUPE/39878_COUPE-2-PORTE/bmw-m4-coupe-2020-front-view.jpg"
           }
        ],
        "Auto SUV":[
           {
              "nome":"Mercedes-AMG Brabus",
              "velocitaMassima":"330 km/h",
              "accelerazione":"3,7 secondi (0-100)",
              "postiEporte":"5 posti e 5 porte",
              "descrizione":"La Mercedes-AMG, modificata da Brabus, rappresenta un SUV di lusso altamente performante. Le modifiche di Brabus includono aggiornamenti al motore, al design, all'interno e ai componenti meccanici, trasformandolo in un SUV estremamente potente e lussuoso, mantenendo al contempo il comfort e la praticità di un SUV di classe superiore.",
              "prezzo":330,
              "immagine":"https://cdn.tuttosport.com/images/2021/08/04/145857576-dd17a8b9-04e0-438c-b77e-6dcd1deb76eb.jpg"
           },
           {
              "nome":"BMW X5",
              "velocitaMassima":"250 km/h",
              "accelerazione":"6,9 secondi (0-100)",
              "postiEporte":"5 posti e 5 porte",
              "descrizione":"Il BMW X5 è un SUV di lusso noto per il suo mix di prestazioni, comfort e tecnologia. Offre un ampio spazio interno, materiali di alta qualità e una guida piacevole. È disponibile con varie opzioni di motorizzazione, che vanno da motori più efficienti a quelli più performanti, offrendo un'esperienza su strada versatile e raffinata.",
              "prezzo":120,
              "immagine":"https://cdn.drivek.com/configurator-imgs/cars/it/800/BMW/X5/41508_SUV-5-PORTE/bmw-x5-front-view.jpg"
           },
           {
              "nome":"AUDI Q7",
              "velocitaMassima":"250 km/h",
              "accelerazione":"7,2 secondi (0-100)",
              "postiEporte":"5 posti e 5 porte",
              "descrizione":"L'Audi Q7 è un SUV spazioso, raffinato e tecnologicamente avanzato. Con un design elegante e interni lussuosi, offre comfort e praticità. Dotato di tecnologie all'avanguardia e opzioni di motorizzazione efficienti, l'Audi Q7 è ideale per viaggi su lunghe distanze e offre un'esperienza di guida sicura e confortevole.",
              "prezzo":90,
              "immagine":"https://cdn.drivek.com/configurator-imgs/cars/it/800/AUDI/Q7/38739_SUV-5-PORTE/audi-q7-suv-2019-front-side-1.jpg"
           }
        ],
        "Auto Compatte":[
           {
              "nome":"Ford Fiesta",
              "velocitaMassima":"180 km/h",
              "accelerazione":"9,2 secondi (0-100)",
              "postiEporte":"5 posti e 5 porte",
              "descrizione":"La Ford Fiesta è una vettura compatta popolare nota per la sua maneggevolezza e il design sportivo. È disponibile in diverse varianti, offrendo un'ampia gamma di motorizzazioni che vanno dalle più economiche alle versioni più performanti. È apprezzata per le sue caratteristiche di sicurezza e il comfort degli interni, offrendo spazio sufficiente per i passeggeri e un bagagliaio capiente.",
              "prezzo":20,
              "immagine":"https://cdn.drivek.com/configurator-imgs/cars/it/800/FORD/FIESTA/40761_BERLINA-5-PORTE/ford-fiesta-5-doors-2021.jpg"
           },
           {
              "nome":"Volkswagen Polo",
              "velocitaMassima":"190 km/h",
              "accelerazione":"10,5 secondi (0-100)",
              "postiEporte":"5 posti e 5 porte",
              "descrizione":"La Volkswagen Polo è conosciuta per la sua affidabilità, la qualità dei materiali e la guida confortevole. È una vettura compatta ben costruita, con interni moderni e tecnologici. Offre un'ampia scelta di motorizzazioni efficienti e una buona manovrabilità, rendendola ideale per un utilizzo quotidiano in città e su strade extraurbane.",
              "prezzo":25,
              "immagine":"https://cdn.drivek.com/configurator-imgs/cars/it/800/VOLKSWAGEN/POLO/40384_HATCHBACK-5-DOORS/volkswagen-polo-2021-front-side-1.jpg"
           },
           {
              "nome":"Renault Clio",
              "velocitaMassima":"190 km/h",
              "accelerazione":"11,1 secondi (0-100)",
              "postiEporte":"5 posti e 5 porte",
              "descrizione":"La Renault Clio è apprezzata per il suo design accattivante, l'eccellente consumo di carburante e le caratteristiche di sicurezza avanzate. È una vettura compatta versatile, adatta sia per gli spostamenti urbani che per viaggi più lunghi. Con una vasta gamma di opzioni e un interno confortevole, la Clio si distingue per l'equilibrio tra prestazioni, economia e stile.",
              "prezzo": 18,
              "immagine":"https://cdn.drivek.com/configurator-imgs/cars/it/800/RENAULT/CLIO/42864_HATCHBACK-5-DOORS/renault-clio-front-view.jpg"
           }
        ]
     };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData));
    });

const port = process.env.PORT || '3000';
app.set('port', port);
/**
* Listen on provided port, on all network interfaces.
*/
app.listen(port, () => {console.log('Example app listening on port 3000!');});