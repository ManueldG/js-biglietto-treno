/* Esercizio di oggi: calcolo del prezzo del biglietto del treno
cartella/repo: js-biglietto-treno
Descrizione
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo a schermo in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

var dist, eta, prezzo, sconto, totale;

prezzo = dist * 0.21;
sconto = (percent * prezzo) / 100;

var sconto = (eta < 18) ? 20 : 1; 
 sconto = (eta >= 65) ? 40 : 1;
totale.toFixed(2);
prompt 
*/

