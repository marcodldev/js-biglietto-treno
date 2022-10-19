/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
  - chiedere i kilometri
  - chiedere l'età
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
  -condizioni:
    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
  - scrivere il prezzo
  - limitare il prezzo a  2 decimali
*/

// VARIABILI 

var eta = parseInt(prompt("Quanti anni hai?"));

var km = parseInt(prompt("Quanti KM intendi fare?"));

var prezzo = km * 0.21;

var sconto20 = prezzo * 0.2;

var sconto40 = prezzo * 0.4;

console.log(prezzo)


    //   CONDIZIONI 

    if (eta < 18) {

    var prezzo = prezzo - sconto20;
  

    } else if  (eta > 65) {
    var prezzo = prezzo - sconto40;

    } else {
    var prezzo = prezzo;
    }

    document.getElementById("biglietto").innerHTML= `Il prezzo del biglietto è: ${prezzo.toFixed(2)} Euro`;

