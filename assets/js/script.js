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


// Seleziono con il selettore il tag button e invoco la funzione anonima
document.querySelector('button').addEventListener('click', function () {

    // Al momento del click viene loggato in console il valore dei chilometri e dell'età
    console.log(km_percorsi.value);
    console.log(user_age.value);

    // Se il passeggero ha un'età minore di 18 anni
    if (user_age.value < 18) {

        // Verrà applicato uno sconto del 20% al tariffario
        const km_price = (0.21 * km_percorsi.value);
        const under_18 = (km_price - (km_price / 100 * 20));

        //Stampo in console il prezzo scontato per i minorenni
        console.log(under_18.toFixed(2) + "€");
    }
})

