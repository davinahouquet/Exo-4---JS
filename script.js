const carre = document.getElementById('carre');
carre.style.backgroundColor = getCouleurAleatoire();

//Fonction pour générer une couleur aléatoire
function getCouleurAleatoire() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//Ajouter(add) et supprimer (remove) carre
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 40) {  //40 et le num de la touche down du clavier

    //const pour créer créer nvx carres
      const newCarre = document.createElement("div");
      newCarre.classList.add("carre");
      newCarre.style.backgroundColor = getCouleurAleatoire();
      document.querySelector(".container").appendChild(newCarre);

    } else if (event.keyCode === 38){

        const carres = document.querySelectorAll(".carre");
        if(carres.length > 0){
            //const qui prend toute la longueur actuelle des carres et en enlève juste 1 par action
            const lastCarre = carres[carres.length - 1];
            lastCarre.remove();
        }
    }
  });
  
  //Fonction qui genere couleur aleatoire : utilise code hexadecima d'ou les chiffres et lettres + #)