// fonction pour envoyer une requête DELETE au serveur
async function deleteTheater(id) {
    await fetch(`/theaters/${id}`, {
        method: "DELETE"
    });

    // recharge la page
    document.location.reload();
}

async function editTheater(event) {
    event.preventDefault();
    const formData = new FormData(event.target); // permet de récupérer les données d'un élément HTML <form>

    await fetch(`/theaters/${formData.get("formId")}`, { // récupère l'ID dans l'input formId du form
        method: "PATCH",
        body: JSON.stringify({
            street: formData.get("street"),
            city: formData.get("city"),
            state: formData.get("state"),
            zipCode: formData.get("zipCode")
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    });

    document.location.reload();
}

// attend que l'HTML soit chargé
document.addEventListener("DOMContentLoaded", () => {
    console.log("HTML loaded");
});