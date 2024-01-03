// **************** RAPPEL DES TYPES DE DONNÉES **************** //

// Si on met des ("") sa devient une chaine de carractère.
let string = "chaine";
let number = 25;
let boolean = true;
let maVariable = null; // Type Undefined
// console.log(typeof + NomDeMaVariable); Sa va me dire de quel type est ma variable.

// ----------------------------------------------------------------------------------

// Tableaux :
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

// ************************************************************************************

// **************** LES STRUCTURE DE CONTROLE **************** //

if (data[0].age > data[1].age) {
  // console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  // Valeur si faux
}

// ----------------------------------------------------------------------------------

// While :
// While = Temps que
let w = 0;

while (w < 10) {
  w++;
  // console.log(" La valeur de w est de : " + w);
}

// ----------------------------------------------------------------------------------

// Do While :
let d = 0;

do {
  d++;
  // console.log(d);
} while (d < 5);

// ----------------------------------------------------------------------------------

// Les boucles for :
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

// ----------------------------------------------------------------------------------

// Switch :
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
    default:
      null;
  }
});

// ***********************************************************************************

// **************** LES MÉTHODES **************** //

// Méthodes Strings :
let string2 = "Javascript est un langage orienté objet";

// console.log(typeof "42");
// console.log(eval(parseInt("1") + 2));
// console.log(isNaN(string));

// console.log(string2.length);
// console.log(string2[string2.length -1]);
// Pour avoir le dernier caractère de la chaine il faut mettre (-1). Car l'Index commence à 0, alors que la lef comence à 1.

// console.log(string2.indexOf("langage"));
// indexOf("Mot de la chaine") va me dire a quel chiffre de caractère commence le mot. ( Fonctionne aussi avec juste une lettre de la chaine).
// Retourne a -1 si il ne connait pas.

// let newString = string2.slice(2); => Commence au deuxième caractère. En coupant les 2 premier.
// let newString = string2.slice(2, 20); => Commence au deuxième et fini au vingtième. En coupant les 2 premier et ce après 20.
// console.log(newString);

// console.log(string2.split("i")); => Sert à couper de tel caractère a tel caractère.

// console.log(string2.toLowerCase()); => Mettre tout la chaine en Minuscule.
// console.log(string2.toUpperCase()) => Mettre tout en Majuscule.

// console.log(string2.replace("Javascript", "PHP"));

// ----------------------------------------------------------------------------------

// Méthodes Number :

let number2 = 42.1234;
let numberString = "42.12 est un chiffre";

// console.log(number2.toFixed(1)); => Supprime à partir de chifffre après la virgule.
// console.log(parseInt("43"));
// console.log(parseInt(numberString)); => Garde juste le nombre dans la chaine.
// console.log(parseFloat(numberString)); => Garde les chiffres après la virgule dans la chaine.

// Math :
// console.log(Math.PI); => Affiche PI.
// console.log(Math.round(4.3)); => Arrondit à l'unité la plus proche.
// console.log(Math.floor(4.9)); => Arrondit à l'unité la plus petite.
// console.log(Math.ceil(4.1)); => Arrondit à l'unité la plus grande.
// console.log(Math.pow(2, 7)); => Faire une puissance.
// console.log(Math.sqrt(16)); => Faire la racine carré
// console.log(Math.random() * 50); => Pour avoir un nombre en 0 et 50 avec virgule.
// console.log(Math.floor(Math.random() * 50)); => Pour avoir un nombre en 0 et 50 mais sans la virgule

// ----------------------------------------------------------------------------------

// Méthodes Arrays :

let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

// -------------------------------------------------------------
// Pour concaténer (Fusionner) et rester dans un tableau =>

// PREMIÈRE MÉTHODE :
// let newArray = array3.concat(array4);
// console.log(newArray);

// SECONDE MÉTHODES :
// let newArray = [...array3, ...array4];
// console.log(newArray);
// -------------------------------------------------------------

// console.log(array3.join("- & £ $ /")); => Casse le tableau et met moi des tiret ou autres entre les éléments.

// console.log(array3.slice(2)); => Coupe moi les deux premier élément du tableau.
// console.log(newArray.slice(2, 4)); => Tu me garde ce qui y'a entre le deuxième et le quatrième élément.

// console.log(array3.indexOf("Python")); => Savoir en quel position ce trouve l'élément rechercher.

// array3.forEach((languages) => console.log(languages)); => Pour chaque élément du tableau, représenté par la variable 'languages', la console affiche le langage correspondant.

// console.log(array3.every((language) => language === "Php")); => Savoir si dans chaque éléments de array3 ce trouve "Php" par exemple.
// console.log(array3.some((language) => language === "Php")); => Savoir si quelque part dans ce tableau ce trouve "Php" par exemple.

// let shift = array3.shift(); => Permet dans d'enlever le premier élément du tableau.
// console.log(array3);
// console.log(array3.pop()); => Permet dans d'enlever le dernier élément du tableau.

// const restArray = array.splice(0, 2, "C++"); => De 0 à 2 tu me met "C++" à la place.
// console.log(array3);

// -------------------------------------------------------------
// IMPORTANT
let arrayNumber = [4, 74, 28, 12, 1];
// console.log(arrayNumber.reduce((x, y) => x + y)); => On veut que nos éléments soit  ajoutez les uns avec les autres en termes Mathématique : (+) (-) (*) (/).
// arrayNumber.push("Chiffre"); => Ajoutez un élément au tableau.
// console.log(arrayNumber);

// FILTER, SORT, MAP
// console.log(arrayNumber.filter((number) => number > 10)); => Filtre moi les élément que j'ai appelé (number) et tu va me donner les éléments qui sont plus grand que 10.

// console.log(arrayNumber.sort());
// console.log(arrayNumber.sort((a, b) => b - a)); => La sa me donne du plus GRAND au plus PETIT.

//  Avec sa on peut tout énumeré à l'écrant.
// document.body.innerHTML = arrayNumber
//   .map((number) => `<li> ${number} </li>`)
//   .join("");
// -------------------------------------------------------------

// Méthodes Objects :

// document.body.innerHTML = data
//   .filter((user) => user.admin === false)
//   .filter((user) => user.pseudo.includes("i"))
//   .sort((a, b) => b.age - a.age)
//   .map(
//     (user) =>
//     `
//       <div class="user-card">
//         <h2>${user.pseudo}</h2> 
//         <p>Age : ${user.age}</p>
//         <p>Status : ${user.admin ? "Modérateur" : "Membre"}</p>
//       </div>
//     `
//   )
//   .join("");
