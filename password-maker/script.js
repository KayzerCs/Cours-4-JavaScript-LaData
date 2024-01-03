const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumber = "0123456789";
const dataSymbols = "!@#$%^&*()_-+=<>?/\\|{}[],.:;`~\"' ";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

const generatePassword = () => {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (number.checked) data.push(...dataNumber);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez sélectionner des critères");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
    console.log(password);
  }

  passwordOutput.value = password;

  navigator.clipboard
    .writeText(password)
    .then(() => {
      console.log("Mot de passe copié avec succès !");
    })
    .catch((err) => {
      console.error("Erreur lors de la copie du mot de passe : ", err);
    });

  generateButton.textContent = "Copié !";

  setTimeout(() => {
    generateButton.textContent = "Générer un mot de passe";
  }, 2000)

};

generateButton.addEventListener("click", generatePassword);
