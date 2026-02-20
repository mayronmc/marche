// Tableau contenant la liste des mangas
const mangas = [
    "Naruto", 
    "One Piece", 
    "DBZ", 
    "Bleach", 
    "HxH", 
    "JJK", 
    "Spy x Family", 
    "Sakamoto Days", 
    "JJBA", 
    "HnK", 
    "Boruto"
];

function tirage() {
    // Math.random() génère un nombre entre 0 et 1
    // On le multiplie par la taille du tableau et on arrondit à l'inférieur avec Math.floor
    const indexAleatoire = Math.floor(Math.random() * mangas.length);
    
    // On récupère le nom du manga correspondant à l'index
    const vainqueur = mangas[indexAleatoire];

    // On affiche le résultat dans la balise <p id="aleatoire">
    document.getElementById("aleatoire").innerText = "Le manga tiré est : " + vainqueur;
}