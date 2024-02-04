(function() {
    'use strict';

    // Fonction pour actualiser la page
    function actualiserPage() {
        location.reload();
    }

    // Actualiser la page toutes les 2 secondes
    setInterval(actualiserPage, 1000);
})();
