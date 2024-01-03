// **************** Rappel des types de données **************** //

// Si on met des ("") sa devient une chaine de carractère.
let string = "chaine";
let number = 25;
let boolean = true;
let maVariable = null; // Type Undefined

// Tableaux
let array = ["Bordeaux", "Toulouse", "Nantes"];
// console.log(array) pour connaitre la valeur associer, console.log(array[0]) pour aller chercher un spécifique.
// Si je veut me balader sur la lettre "d" de bordeaux => console.log(array[0][3]).
// Dans un Objet on met des des {} et dans un Tableau on met des []

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];
// console.log(array[4].nom);

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};
//  Pour ce bnalader => console.log(objet.age);

objet.adresse = "22 rue du code";
// console.log(objet);
// Je vien d'ajouter une news ligne dans l'objet.

let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nicolas",
    age: 42,
    technos: ["Php", "React", "NodeJs"],
    admin: true,
  },
];
// console.log(data[2].pseudo);

// **************** Les structures de controle **************** //

if (data[0].age > data[1].age) {
  // console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  // Valeur si faux
}

// While
// While = Temps que
let w = 0;

while (w < 10) {
  w++;
  // console.log(" La valeur de w est de : " + w);
}

// Do While
let d = 0;

do {
  d++;
  // console.log(d);
} while (d < 5);

// Les boucles for
for (const user of data) {
  // document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`
}

// On déclare la valeur de i / jusqu'ou on boucle / on incrément i si la condition 2 n'est pas remplie

for (i = 0; i < data.length; i++) {
  // console.log(i);
  // console.log(data[i].technos[0]);
  // document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
}
// console.log(data.length);
// data.length Arrive toujours à savoir la longueur du tableau


// Switch
document.body.addEventListener("click", (e) => {
  // console.log(e.target.id);

  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;

    case "php":
      document.body.style.background = "purple";
      break;

    case "python":
      document.body.style.background = "blue";
      break;
  }
});
