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
const TARIFFA = 0.21;

var birthday = prompt("Prego inserire la data di nascita nel seguente formato", "DD/MM/AAAA");
var dd = birthday.substring(0, 2);
var mm = birthday.substring(3,5);
var aaaa = birthday.substring(6, 10);

console.log("birthday",birthday);
console.log("dd",dd);
console.log("mm",mm);
console.log("yyyy",aaaa);

//  Istanziata Data
birth = new Date(aaaa,(mm-1),dd);
today = new Date();
document.getElementById("data").innerHTML= " "+today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();
console.log(today);

// legge la distanza da percorrere
var dist = prompt("distanza da percorrere","00.00");
document.getElementById("distanza").innerHTML= dist;
console.log("distanza:",dist," Km");

// calcola età 
var eta =  parseFloat((today.getTime() - birth.getTime())/31536000000) ;
console.log("età:",eta);

// calcola percentuale
var percent = (eta <=  18) ? 20 : ((eta >= 65) ? 40 : 0) ;
    
console.log("percentuale",percent);
document.getElementById("sconto").innerHTML= percent+"% ";

// calcola prezzo
var prezzo = (dist * TARIFFA);
document.getElementById("tariffa").innerHTML= TARIFFA;
console.log("prezzo",prezzo);

// calcolo sconto
var sconto = (prezzo * percent) / 100;
console.log("sconto",sconto);

// calcola totale
var totale = prezzo - sconto;
document.getElementById("totale").innerHTML= totale.toFixed(2);
console.log("totale",totale);




