const target = document.getElementById("target");
let array = [
  "développeur",
  "photographe",
  "créatif",
  "designer",
  "ingénieur",
  "pompier",
  "gendarme",
];
let wordIndex = 0;
let letterIndex = 0;

const creatLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 2800);
};

// creatLetter();

//  setInterval(() => {
//     letterIndex++
//     creatLetter()
// }, 2000);

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      creatLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 70);
};
loop();
