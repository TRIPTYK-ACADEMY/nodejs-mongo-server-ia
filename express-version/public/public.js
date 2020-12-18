// fonction pour envoyer une requête DELETE au serveur
async function deleteTheater(id) {
    await fetch(`/theaters?id=${id}`, {
        method: "DELETE"
    });

    // recharge la page
    document.location.reload();
}

// attend que l'HTML soit chargé
document.addEventListener("DOMContentLoaded", () => {
    console.log("HTML loaded");
});