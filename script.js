const carre = document.getElementById("carre");
carre.style.backgroundColor = getCouleurAleatoire();
//Fonction pour générer une couleur aléatoire : utilise code hexadecima d'ou les chiffres et lettres + #)
function getCouleurAleatoire() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//Ajouter(add) et supprimer (remove) carre             
document.addEventListener("keydown", function(touche) { //(event) non plus! Il stocke juste les informations de la fonctions et on      vérifie après avec  === "ArrowDown"(qui correspond à la flèche du bas du clavier)

  const carres = document.querySelectorAll(".carre"); //On délcare carres au début de la fonction pour qu'elle soit accesible par tous les if
  
  if(touche.key === "ArrowDown") {  

    //const pour créer créer nvx carres
      const newCarre = document.createElement("button");
      newCarre.classList.add("carre");
      newCarre.style.backgroundColor = getCouleurAleatoire();
      
      newCarre.addEventListener("click", function() {
        if(carres.length){
        newCarre.style.backgroundColor = "black";
        }
      });

      document.querySelector("div").appendChild(newCarre);
console.log(newCarre)
    } else if (touche.key === "ArrowUp"){

        if(carres.length > 0){
            //const qui prend toute la longueur actuelle des carres et en enlève juste 1 par action
            const lastCarre = carres[carres.length - 1];
            lastCarre.remove();
        }
    }
  });
