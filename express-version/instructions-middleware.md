# pour chaque appel sur votre serveur , logger dans un fichier access.log chaque appel sous ce format :

    <IP> a fait une requête <TYPE DE REQUETE> sur <URL> à <DATE>

# pour les requêtes sur la route /films , empêcher Edge d'accéder à votre site (req.get('User-Agent')) (lui renvoyer "t null")

# Faites une page 404 custom et une page d'erreur custom (renvoyez un fichier html ou mustache quoi)
