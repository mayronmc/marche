function verifierPalindrome() {
    // 1. On récupère ce qui est tapé dans l'input
    const mot = document.getElementById("mot-saisi").value.toLowerCase();
    
    // 2. On crée le mot inversé
    const inverse = mot.split("").reverse().join("");

    // 3. On sélectionne la zone de résultat
    const zone = document.getElementById("resultat");

    // 4. On compare et on affiche
    if (mot === "") {
        zone.innerText = "Erreur : le champ est vide.";
    } else if (mot === inverse) {
        zone.innerText = mot + " est bien un palindrome !";
    } else {
        zone.innerText = mot + " n'est pas un palindrome.";
    }
}