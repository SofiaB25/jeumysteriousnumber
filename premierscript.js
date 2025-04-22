function tester() {
  const guess = document.getElementById('guess').value;
  const resultat = document.getElementById('resultat');

  if (guess >= 1 && guess <= 10) {
      const secretNumber = Math.floor(Math.random() * 10) + 1;
      if (guess == secretNumber) {
          resultat.textContent = "Bravo, tu as trouvé le numéro !";
      } else {
          resultat.textContent = "Désolé, ce n'est pas le bon numéro. Essaye encore !";
      }
  } else {
      resultat.textContent = "Veuillez entrer un numéro entre 1 et 10.";
  }
}