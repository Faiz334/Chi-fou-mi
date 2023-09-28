let manchesJoueur = 0;
let manchesOrdinateur = 0;
let choixJoueur = "";

// le choix aléatoire de l'ordinateur
function genererChoixOrdinateur() {
  const choix = ["pierre", "feuille", "ciseaux"];
  const choixAleatoire = Math.floor(Math.random() * 3);
  return choix[choixAleatoire];
}

// le gagnant de chaque manche
function determinerGagnant(choixOrdinateur) {
  if (choixJoueur === choixOrdinateur) {
    return "Égalité !";
  } else if (
    (choixJoueur === "pierre" && choixOrdinateur === "ciseaux") ||
    (choixJoueur === "feuille" && choixOrdinateur === "pierre") ||
    (choixJoueur === "ciseaux" && choixOrdinateur === "feuille")
  ) {
    manchesJoueur++;
    return "Vous avez gagné cette manche !";
  } else {
    manchesOrdinateur++;
    return "L'ordinateur a gagné cette manche !";
  }
}

// l'affichage des manches
function afficherManches() {
  document.getElementById("score-joueur").textContent = manchesJoueur;
  document.getElementById("score-ordinateur").textContent = manchesOrdinateur;
}

// le résultat
function afficherResultat(resultat) {
  document.getElementById("result-container").textContent = resultat;
}

// Fonction pour gérer le clic sur les boutons de choix
function choixJoueurClick(e) {
  choixJoueur = e.target.id;
  const choixOrdinateur = genererChoixOrdinateur();
  const resultat = determinerGagnant(choixOrdinateur);
  afficherResultat(resultat);
  afficherManches(); 

  // annonce du vainqueur
  if (manchesJoueur + manchesOrdinateur === 5) {
    const gagnant = (manchesJoueur > manchesOrdinateur) ? "Vous avez gagné la partie !" : "L'ordinateur a gagné la partie !";
    alert(`Partie terminée.\n\nManches gagnées par vous : ${manchesJoueur}\nManches gagnées par l'ordinateur : ${manchesOrdinateur}\n\n${gagnant}`);
    resetPartie();
  }
}

// Fonction pour réinitialiser la partie
function resetPartie() {
  manchesJoueur = 0;
  manchesOrdinateur = 0;
  choixJoueur = "";
  afficherManches();
  afficherResultat("");
}

// Ajout des écouteurs d'événements sur les boutons
document.getElementById("pierre").addEventListener("click", choixJoueurClick);
document.getElementById("feuille").addEventListener("click", choixJoueurClick);
document.getElementById("ciseaux").addEventListener("click", choixJoueurClick);
document.getElementById("reset-button").addEventListener("click", resetPartie);
