// fonction pour envoyer une requête DELETE au serveur
function deleteTheater(id) {
    fetch(`/theaters?id=${id}`, {
        method: "DELETE"
    });
}

// attend que l'HTML soit chargé
document.addEventListener("DOMContentLoaded", () => {
    console.log("HTML loaded");
});