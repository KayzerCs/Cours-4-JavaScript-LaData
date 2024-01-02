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

objet.adresse = "22 rue du code"
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

