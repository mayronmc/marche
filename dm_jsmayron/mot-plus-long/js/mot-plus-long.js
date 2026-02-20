// Récupération du texte caché
const phrase = document.getElementById("citation").innerText;

// Nettoyage de la ponctuation et découpage en tableau
const mots = phrase.replace(/[.,]/g, "").split(" ");

let max = "";

// Boucle pour trouver le mot le plus long
for (let m of mots) {
    if (m.length > max.length) {
        max = m;
    }
}

// Affichage unique du mot le plus long
document.getElementById("mot-plus-long").innerText = max;