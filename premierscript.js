let attempts = 0; 
const maxAttempts = 3; 

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



  console.log("Jeu en cours...");


  if (attempts < maxAttempts) {
    document.getElementById('rejouer').style.display = 'block'; 
  
  
  
  if (attempts === maxAttempts - 1) {   
    document.querySelector('.result').innerHTML = 'C\'est votre dernière tentative!';
    }
  }
}


function resetJeu() {
  
  if (attempts < maxAttempts) {
    attempts++; 


    document.querySelector('.input-box input').value = ''; 
    document.querySelector('.result').innerHTML = ''; 


    if (attempts < maxAttempts) {
      document.querySelector('.result').innerHTML = `Tentative ${attempts} de ${maxAttempts}`;
    }

  
    if (attempts === maxAttempts) {
      document.querySelector('.result').innerHTML = 'Jeu terminé! Vous avez atteint le nombre maximal de tentatives.';
      document.getElementById('rejouer').style.display = 'none'; 
    }
  }
}


function resetJeuComplet() {
  attempts = 0; 
  document.getElementById('rejouer').style.display = 'none'; 
  document.querySelector('.input-box input').value = ''; 
  document.querySelector('.result').innerHTML = ''; 
  document.querySelector('.result').innerHTML = 'Vous pouvez recommencer à jouer!';
}

