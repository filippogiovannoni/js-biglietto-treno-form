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

// Seleziono con il selettore la classe generate e invoco la funzione anonima
document.querySelector('.generate').addEventListener('click', function () {

    // Al momento del click viene loggato in console il valore dei chilometri e dell'età
    console.log(km_percorsi.value);
    console.log(user_age.value);
    document.getElementById('fullname').innerHTML = full_name.value

    // Se il passeggero ha un'età minore di 18 anni
    if (user_age.value < 18) {

        // Verrà applicato uno sconto del 20% al tariffario
        const km_price = (0.21 * km_percorsi.value);
        const under_18 = (km_price - (km_price / 100 * 20));

        //Stampo in pagina il prezzo scontato per i minorenni
        document.getElementById('price').innerHTML = (under_18.toFixed(2) + "€");
    }

    // Altrimenti se il passeggero ha un'età superiore ai 65 anni
    else if (user_age.value > 65) {

        // Verrà applicato uno sconto del 40% al tariffario
        const km_price = (0.21 * km_percorsi.value);
        const over_65 = (km_price - (km_price / 100 * 40));

        // Stampo in pagina il prezzo della tratta per il passeggero over 65
        document.getElementById('price').innerHTML = (over_65.toFixed(2) + "€");
    }

    // // Altrimenti il passeggero non potrà usufruire di nessuna scontistica.
    else {

        // // Stampo in pagina il prezzo della tratta per il passeggero.
        const km_price = (0.21 * km_percorsi.value);
        document.getElementById('price').innerHTML = (km_price.toFixed(2) + "€");
    }

})