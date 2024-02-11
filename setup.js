(function() {
    'use strict';

    // Créer l'élément div pour le message d'alerte
    var alertDiv = document.createElement('div');
    alertDiv.id = 'rs2kAlert';
    alertDiv.innerHTML = 'RS2K est arrêté par l\'admin. Veuillez le supprimer ou le désactiver de Tampermonkey.';
    document.body.appendChild(alertDiv);

    // Ajouter le style directement dans l'élément div
    alertDiv.style.position = 'fixed';
    alertDiv.style.top = '50%';
    alertDiv.style.left = '50%';
    alertDiv.style.transform = 'translate(-50%, -50%)';
    alertDiv.style.padding = '20px';
    alertDiv.style.backgroundColor = '#e74c3c';
    alertDiv.style.color = '#ffffff';
    alertDiv.style.borderRadius = '10px';
    alertDiv.style.zIndex = '9999';
    alertDiv.style.textAlign = 'center';
    alertDiv.style.fontFamily = 'Helvetica Neue, Helvetica, Arial, sans-serif';
    alertDiv.style.fontSize = '18px';
    alertDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    alertDiv.style.animation = 'blink 0.5s infinite alternate';

    // Fonction pour faire clignoter le message
    function blink() {
        alertDiv.style.visibility = (alertDiv.style.visibility === 'visible') ? 'hidden' : 'visible';
    }

    // Faire clignoter le message toutes les 500 millisecondes
    setInterval(blink, 5000);

})();


