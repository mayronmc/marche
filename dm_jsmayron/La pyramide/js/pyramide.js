function construirePyramide() {
    // 1. Récupérer le nombre de lignes saisi
    const nbLignes = parseInt(document.getElementById("ligne-pyramide").value);
    
    // 2. Chaîne de base (on met assez d'étoiles pour le max possible)
    const etoiles = "****************************************";
    let resultat = "";

    // 3. Boucle pour construire chaque étage
    for (let i = 1; i <= nbLignes; i++) {
        // slice(0, i) prend les étoiles de l'index 0 jusqu'à i
        resultat += etoiles.slice(0, i) + "<br>";
    }

    // 4. Injection dans le HTML
    document.getElementById("pyramide").innerHTML = resultat;
}