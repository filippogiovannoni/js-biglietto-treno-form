/* Tools 
- prompt
- const / let
- if / else
- console.log
- document.getElementById
- document.querySelector
- addEventListener

Tariffario
- 0.21€ / km 
- < 18 anni: -20%
- > 65 anni: -40%
*/

// Seleziono con il selettore il tag button
document.querySelector('button').addEventListener('click', function(){
    
    // Al momento del click loggo in console il valore dei chilometri e dell'età
    console.log(km_percorsi.value);
    console.log(user_age.value);
} )
